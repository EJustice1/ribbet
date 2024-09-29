// Classes.js

export class Profile {
    constructor(name, age, email, friends = []) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.friends = friends; // List of friend objects
    }
  }
  
  export class Bet {
    constructor(id, amount, outcome, status) {
      this.id = id;
      this.amount = amount;
      this.outcome = outcome;  // Example: win/loss
      this.status = status;    // Example: pending, won, lost
    }
  }
  
  export class FriendGroup {
    constructor(groupName, friends = [], bets = []) {
      this.groupName = groupName;
      this.friends = friends;  // List of Profile objects
      this.bets = bets;        // List of Bet objects
    }
  }
  
  // You could also add any helper methods if needed, e.g., to populate the classes
  export const populateProfile = (data) => {
    return new Profile(data.name, data.age, data.email, data.friends);
  };
  
  export const populateFriendGroup = (data) => {
    return new FriendGroup(data.groupName, data.friends, data.bets);
  };
  
  export const populateBet = (data) => {
    return new Bet(data.id, data.amount, data.outcome, data.status);
  };
  