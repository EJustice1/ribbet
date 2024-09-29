const startingBalance = 5000;

const { MongoClient, ObjectId } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://ethanjus:ribbet@cluster0.qitym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");

    // Database Name
    const dbName = "ribbetdb"; // Replace with your actual database name
    const db = client.db(dbName);

    // Collections
    const groupsCollection = db.collection("groups");
    const profilesCollection = db.collection("profiles");
    const betsCollection = db.collection("bets");
    const selectionsCollection = db.collection("selections");

    // Example: Insert a document into the profiles collection
    async function insertProfile(profile) {
      const result = await profilesCollection.insertOne(profile);
      console.log(
        `New profile created with the following id: ${result.insertedId}`
      );
      return result.insertedId;
    }

    // Example: Insert a document into the groups collection
    async function insertGroup(group) {
      const result = await groupsCollection.insertOne(group);
      console.log(
        `New group created with the following id: ${result.insertedId}`
      );
      return result.insertedId;
    }

    // Example: Insert a document into the bets collection
    async function insertBet(bet) {
      const result = await betsCollection.insertOne(bet);
      console.log(
        `New bet created with the following id: ${result.insertedId}`
      );
      return result.insertedId;
    }

    // Example: Insert a document into the bets collection
    async function insertSelection(selection) {
      const result = await selectionsCollection.insertOne(selection);
      console.log(
        `New bet created with the following id: ${result.insertedId}`
      );
      return result.insertedId;
    }

    async function createProfile(username, display_name, password) {
      const profile = {
        username: username,
        display_name: display_name,
        password: password, // Ensure to hash passwords in a real application
        coin_balance: startingBalance,
        selections_array: [],
        groups_array: [],
        avatar_string: "fish.png",
      };

      return await insertProfile(profile);
    }

    async function createGroup(name) {
      const group = {
        group_name: name,
        profile_array: [],
        bets_array: [],
      };

      return await insertGroup(group);
    }

    async function createBet(type, group_id, creator_id, subject_id, odds, description, end_date) {
      const bet = {
        type: type,
        group_id: group_id,
        creator_id: creator_id,
        subject_id: subject_id,
        odds: odds,
        hit: -1,
        description: description,
        end_date: end_date,
        selections_array: [],
      };

      const betId = await insertBet(bet);

      await groupsCollection.updateOne(
        { _id: group_id },
        { $push: { bets_array: betId } }
      );

      return betId;
    }

    async function createSelection(choice, bet_id, bettor_id, amount, hit) {
      const selection = {
        choice: choice,
        bet_id: bet_id,
        hit: hit,
        bettor_id: bettor_id,
        amount: amount,
      };

      const selectionId = await insertSelection(selection);

      await profilesCollection.updateOne(
        { _id: bettor_id },
        { $push: { selections_array: selectionId } }
      );

      await betsCollection.updateOne(
        { _id: bet_id },
        { $push: { selections_array: selectionId } }
      );

      await profilesCollection.updateOne(
        { _id: bettor_id },
        { $inc: { coin_balance: -amount } }
      );
    }

    async function addProfileToGroup(profileId, groupId) {
      await groupsCollection.updateOne(
        { _id: groupId },
        { $push: { profile_array: profileId } }
      );
      await profilesCollection.updateOne(
        { _id: profileId },
        { $push: { groups_array: groupId } }
      );
    }

    async function updateForBet(betId) {
      try {
        // Retrieve the bet object using the betId
        const bet = await betsCollection.findOne({ _id: betId });

        for (const selectionId of bet.selections_array) {
          const selection = await selectionsCollection.findOne({
            _id: selectionId,
          });
          if (!selection) continue;

          if (selection.hit === bet.hit) {
            odds = bet.odds / 100.0 + 1;
            if (bet.odds < 0) odds = 100 / (-1 * bet.odds) + 1;
            await profilesCollection.updateOne(
              { _id: selection.bettor_id },
              { $inc: { coin_balance: selection.amount * odds } }
            );
            console.log(
              `Incremented coin balance of profile with id ${selection.bettor_id} by ${selection.amount}`
            );
          }
        }
        console.log(`Update for bet ${betId} complete.`);
      } catch (error) {
        console.error(`Error in updateForBet: ${error}`);
      }
    }

    async function getBetFeed(profileId) {
      const profile = await profilesCollection.findOne({ _id: profileId });

      if (!profile || !profile.groups_array) {
        throw new Error(
          `Profile with id ${profileId} not found or has no groups.`
        );
      }

      // Get the array of groupIds from the profile
      const groupIds = profile.groups_array;

      // Initialize an array to hold all the bets
      const allBets = [];

      const currDate = new Date();
      // Retrieve all bets for each group
      for (const groupId of groupIds) {
        const group = await groupsCollection.findOne({ _id: groupId });

        if (!group || !group.bets_array) continue; // If group is not found or has no bets, skip to the next one

        // Retrieve bets using the bets_array
        for (const betId of group.bets_array) {
          const bet = await betsCollection.findOne({ _id: betId });

          if (bet && Number(bet.end_date) > Number(currDate)) {
            allBets.push(bet); // Add the bet to the allBets array if it exists
            console.log(bet);
          }
        }
      }

      // Return the array of bets
      return allBets;
    }

    async function getGroups(profileId) {
      const profile = await profilesCollection.findOne({ _id: profileId });

      // Get the array of groupIds from the profile
      const groupIds = profile.groups_array;

      const allGroups = [];

      for (const groupId of groupIds) {
        const group = await groupsCollection.findOne({ _id: groupId });

        if (!group || !group.bets_array) continue; // If group is not found or has no bets, skip to the next one

        if (group) {
          allGroups.push(group);
          console.log(group);
        }
      }
    }

    async function getGroupBets(groupId) {
      const group = await groupsCollection.findOne({ _id: groupId });

      // Get the array of groupIds from the profile
      const betIds = group.bets_array;

      const allBets = [];
      const currDate = new Date();


      for (const bet_id of betIds) {
        const bet = await betsCollection.findOne({ _id: bet_id });

        // if (!bet) continue; // If group is not found or has no bets, skip to the next one

        if (bet && Number(bet.end_date) > Number(currDate)) {
          allBets.push(bet); // Add the bet to the allBets array if it exists
          console.log(bet);
        }
      }
    }

    async function getPlacedBets(profileId) {
        const profile = await profilesCollection.findOne({ _id: profileId });
  
        // Get the array of groupIds from the profile
        const selectionIds = profile.selections_array;
  
        const allSelections = [];
  
        for (const selectionId of selectionIds) {
          const selection = await selectionsCollection.findOne({ _id: selectionId });
  
          if (!selection) continue; // If group is not found or has no bets, skip to the next one
  
          if (selection) {
            allSelections.push(selection);
            console.log(selection);
          }
        }
      }
  
    
    //   const profileId1 = await createProfile("Profile1", "Display Name 1", "password1");
    //   const profileId2 = await createProfile("Profile2", "Display Name 2", "password2");

    // //   // Create a group and add profiles to it
    //   const groupId1 = await createGroup("Test Group");
    //   const groupId2 = await createGroup("Test Group 2");
    //   const groupId3 = await createGroup("Test Group 3");

    //   console.log(groupId1);
    //   console.log(groupId2);
    //   console.log(groupId3);

    //   await addProfileToGroup(profileId1, groupId1);
    //   await addProfileToGroup(profileId1, groupId2);
    //   await addProfileToGroup(profileId1, groupId3);

    //   // Create a bet
    //   const betId = await createBet("Test Type", groupId1, profileId1, null, -100, "Test Description", new Date(1,2,3));
    //   const betId2 = await createBet("Test Type2", groupId2, profileId1, null, -1000, "gay sex", new Date(3000,2, 3));
    //   const betId3a = await createBet("Test Type 3a", groupId3, profileId1, null, -100, "beer!", new Date(3000,2, 3));
    //   const betId3b = await createBet("Test Type 3b", groupId3, profileId1, null, -100, "3a, but again", new Date(3000,2, 3));

    //await getBetFeed(new ObjectId("66f8ac97a2817372fdf831dd"));
    //  await getGroupBets(new ObjectId("66f8ac98a2817372fdf831e1"));
   // await getPlacedBets(new ObjectId("66f8ac97a2817372fdf831de"));
      // await createSelection("Choice 3", new ObjectId('66f8ac98a2817372fdf831e3'), new ObjectId('66f8ac97a2817372fdf831de'), 5000000000);
    //   await createSelection("Choice 2", new ObjectId('66f8ac98a2817372fdf831e4'), new ObjectId('66f8ac97a2817372fdf831dd'), 300);
    //   await createSelection("Choice 1", new ObjectId('66f8ac98a2817372fdf831e5'), new ObjectId('66f8ac97a2817372fdf831dd'), 500);


    // Simulate the outcome of the bet by setting hit for both selections
    //   const bet = await betsCollection.findOne({ _id: betId });
    //   for (const selectionId of bet.selections_array) {
    //     await selectionsCollection.updateOne(
    //       { _id: selectionId },
    //       { $set: { hit: 1 } } // Setting hit to 1 for testing purposes
    //     );
    //   }

    // Update for bet
    //   await updateForBet(betId);

    console.log("Initialization complete");
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
  }
}
main().catch(console.dir);
