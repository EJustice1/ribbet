// auth/mockData.js

export const mockUsers = [
  {
    id: '1',
    userName: 'johndoe',
    password: 'black',
    displayName: 'John Doe',
    email: 'john@example.com',
    coinBalance: 1000,
    friends: ['2', '3', '4'],
    friendGroups: ['1', '2'],
    selectionArray: ['1', '2', '3']
  },
  {
    id: '2',
    userName: 'janesmith',
    password: 'white',
    displayName: 'Jane Smith',
    email: 'jane@example.com',
    coinBalance: 1500,
    friends: ['1', '3'],
    friendGroups: ['1'],
    selectionArray: ['2', '4']
  },
  {
    id: '3',
    userName: 'bobjohnson',
    password: 'green',
    displayName: 'Bob Johnson',
    email: 'bob@example.com',
    coinBalance: 800,
    friends: ['1', '2'],
    friendGroups: ['2'],
    selectionArray: ['1', '4']
  },
  {
    id: '4',
    userName: 'alicegreen',
    password: 'red',
    displayName: 'Alice Green',
    email: 'alice@example.com',
    coinBalance: 1200,
    friends: ['1'],
    friendGroups: ['2'],
    selectionArray: ['3']
  }
];

export const mockFriendGroups = [
  {
    id: '1',
    groupName: 'Weekend Squad',
    friends: ['1', '2'],
    bets: ['1', '2']
  },
  {
    id: '2',
    groupName: 'Work Buddies',
    friends: ['1', '3', '4'],
    bets: ['3', '4', '5']
  }
];

export const mockBets = [
  {
    id: '1',
    typeBet: 'binary',
    creator: '1',
    subject: '2',
    oddsPos: -150,
    oddsNeg: 130,
    description: 'Jane will run a marathon this year',
    endDate: '2024-12-31',
    group: '1'
  },
  {
    id: '2',
    typeBet: 'binary',
    creator: '2',
    subject: '1',
    oddsPos: -200,
    oddsNeg: 180,
    description: 'John will get a promotion this quarter',
    endDate: '2024-06-30',
    group: '1'
  },
  {
    id: '3',
    typeBet: 'binary',
    creator: '3',
    subject: '4',
    oddsPos: -120,
    oddsNeg: 100,
    description: 'Alice will learn to play guitar',
    endDate: '2024-09-30',
    group: '2'
  },
  {
    id: '4',
    typeBet: 'binary',
    creator: '1',
    subject: '3',
    oddsPos: -180,
    oddsNeg: 160,
    description: 'Bob will travel to Europe this summer',
    endDate: '2024-08-31',
    group: '2'
  },
  {
    id: '5',
    typeBet: 'binary',
    creator: '4',
    subject: '1',
    oddsPos: -110,
    oddsNeg: 90,
    description: 'John will adopt a pet this year',
    endDate: '2024-12-31',
    group: '2'
  }
];

export const mockSelections = [
  {
    id: '1',
    choice: true,
    betId: '1',
    hit: null,
    bettorId: '1',
    amountBet: 100
  },
  {
    id: '2',
    choice: false,
    betId: '2',
    hit: null,
    bettorId: '2',
    amountBet: 50
  },
  {
    id: '3',
    choice: true,
    betId: '3',
    hit: null,
    bettorId: '4',
    amountBet: 75
  },
  {
    id: '4',
    choice: false,
    betId: '4',
    hit: null,
    bettorId: '3',
    amountBet: 120
  }
];