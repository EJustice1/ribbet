// Classes.js

export class Profile {
  constructor(id, userName, password, displayName, email, coinBalance, selectionArray = [], friends = [], friendGroups = []) {
    this.id = id;
    this.name = userName;
    this.password = password;
    this.displayName = displayName;
    this.email = email;
    this.coinBalance = coinBalance;
    this.selectionArray = selectionArray;
    this.friends = friends; // List of friend objects
    this.friendGroups = friendGroups;
  }
}

export class Bet {
  constructor(id, typeBet, creator, subject, oddsPos, oddsNeg, description, endDate, group) {
    this.id = id;
    this.typeBet = typeBet;
    this.creator = creator;
    this.subject = subject; //the person the bet applies to 
    this.oddsPos = oddsPos; //the -100 odds, the outcome that is more likely
    this.oddsNeg = oddsNeg; //outcome that is less likely 
    this.description = description; //string explaining the bet and what is going to happen
    this.endDate = endDate; //when the bet will pay out
    this.group = group;
    console.log('Bet constructed:', JSON.stringify(this, null, 2));
  }
}

export class FriendGroup {
  constructor(id, groupName, friends = [], bets = []) {
    this.id = id;
    this.groupName = groupName;
    this.friends = friends;  // List of Profile objects
    this.bets = bets;        // List of Bet objects
  }
}

export class Selections {
  constructor(choice, betId, hit, bettorId, amountBet){
    this.choice = choice;
    this.betId = betId;
    this.hit = hit;
    this.bettorId = bettorId;
    this.amountBet = amountBet;
  }
}

// You could also add any helper methods if needed, e.g., to populate the classes
// Classes.js

// ... [Previous class definitions remain unchanged]

export const populateProfile = (data, allUsers, allGroups, allSelections) => {
// const friends = data.friends.map(id => allUsers.find(u => u.id === id));
// const friendGroups = data.friendGroups.map(id => allGroups.find(g => g.id === id));
// const selectionArray = data.selectionArray.map(id => allSelections.find(s => s.id === id));
const friends = data.friends ? data.friends.map(id => allUsers.find(u => u.id === id)).filter(friend => friend !== undefined) : [];
const friendGroups = data.friendGroups ? data.friendGroups.map(id => allGroups.find(g => g.id === id)).filter(group => group !== undefined) : [];
const selectionArray = data.selectionArray ? data.selectionArray.map(id => allSelections.find(s => s.id === id)).filter(selection => selection !== undefined) : [];

return new Profile(
  data.id,
  data.userName,
  this.password,
  data.displayName,
  data.email,
  data.coinBalance,
  selectionArray,
  friends,
  friendGroups
);
};

export const populateFriendGroup = (data, allUsers, allBets) => {
const friends = data.friends.map(id => allUsers.find(u => u.id === id));
const bets = data.bets.map(id => allBets.find(b => b.id === id));

return new FriendGroup(data.id, data.groupName, friends, bets);
};

export const populateBet = (data, allUsers) => {
console.log('Populating bet with data:', data);
const creator = allUsers.find(u => u.id === data.creator);
const subject = allUsers.find(u => u.id === data.subject);
console.log('Creator:', creator, 'Subject:', subject);

const bet = new Bet(
  data.id,
  data.typeBet,
  creator,
  subject,
  data.oddsPos,
  data.oddsNeg,
  data.description,
  data.endDate,
  data.group  // Ensure we're passing the group here
);

console.log('Populated bet:', bet);
return bet;
};

export const populateSelection = (data, allBets) => {
return new Selections(
  data.choice,
  allBets.find(b => b.id === data.betId),
  data.hit,
  data.bettorId,
  data.amountBet
);
};
