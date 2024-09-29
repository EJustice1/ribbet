// auth/mockData.js

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
    friendGroups: ['1', '2'],
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
    friendGroups: ['1', '2'],
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
    friends: ['1', '2', '3'],
    bets: ['1', '2']
  },
  {
    id: '2',
    groupName: 'Work Buddies',
    friends: ['1', '2', '3', '4'],
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

// // export const mockSelections = [
// //   {
// //     id: '1',
// //     choice: true,
// //     betId: '1',
// //     hit: null,
// //     bettorId: '1',
// //     amountBet: 100
// //   },
// //   {
// //     id: '2',
// //     choice: false,
// //     betId: '2',
// //     hit: null,
// //     bettorId: '2',
// //     amountBet: 50
// //   },
// //   {
// //     id: '3',
// //     choice: true,
// //     betId: '3',
// //     hit: null,
// //     bettorId: '4',
// //     amountBet: 75
// //   },
// //   {
// //     id: '4',
// //     choice: false,
// //     betId: '4',
// //     hit: null,
// //     bettorId: '3',
// //     amountBet: 120
// //   }
// // ];

// // Expanded mock data with 100 additional datapoints

// export const expandedMockUsers = [
//   // Original users
//   {
//     id: '1',
//     userName: 'johndoe',
//     password: 'black',
//     displayName: 'John Doe',
//     email: 'john@example.com',
//     coinBalance: 1000,
//     friends: ['2', '3', '4'],
//     friendGroups: ['1', '2'],
//     selectionArray: ['1', '2', '3']
//   },
//   {
//     id: '2',
//     userName: 'janesmith',
//     password: 'white',
//     displayName: 'Jane Smith',
//     email: 'jane@example.com',
//     coinBalance: 1500,
//     friends: ['1', '3'],
//     friendGroups: ['1'],
//     selectionArray: ['2', '4']
//   },
//   {
//     id: '3',
//     userName: 'bobjohnson',
//     password: 'green',
//     displayName: 'Bob Johnson',
//     email: 'bob@example.com',
//     coinBalance: 800,
//     friends: ['1', '2'],
//     friendGroups: ['2'],
//     selectionArray: ['1', '4']
//   },
//   {
//     id: '4',
//     userName: 'alicegreen',
//     password: 'red',
//     displayName: 'Alice Green',
//     email: 'alice@example.com',
//     coinBalance: 1200,
//     friends: ['1'],
//     friendGroups: ['2'],
//     selectionArray: ['3']
//   },
//   // Additional users
//   {
//     id: '5',
//     userName: 'emmabrown',
//     password: 'purple',
//     displayName: 'Emma Brown',
//     email: 'emma@example.com',
//     coinBalance: 950,
//     friends: ['1', '2', '3'],
//     friendGroups: ['3'],
//     selectionArray: ['5', '6']
//   },
//   {
//     id: '6',
//     userName: 'michaelwilson',
//     password: 'orange',
//     displayName: 'Michael Wilson',
//     email: 'michael@example.com',
//     coinBalance: 1100,
//     friends: ['2', '4', '5'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['7', '8']
//   },
//   {
//     id: '7',
//     userName: 'alicebrown',
//     password: 'red',
//     displayName: 'Alice Brown',
//     email: 'alice@example.com',
//     coinBalance: 1100,
//     friends: ['8', '9', '10'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['1', '2', '4']
//   },
//   {
//     id: '8',
//     userName: 'bobsmith',
//     password: 'yellow',
//     displayName: 'Bob Smith',
//     email: 'bob@example.com',
//     coinBalance: 1300,
//     friends: ['7', '9', '10'],
//     friendGroups: ['2', '3'],
//     selectionArray: ['2', '3', '5']
//   },
//   {
//     id: '9',
//     userName: 'charlieevans',
//     password: 'orange',
//     displayName: 'Charlie Evans',
//     email: 'charlie@example.com',
//     coinBalance: 900,
//     friends: ['7', '8', '10'],
//     friendGroups: ['1', '4'],
//     selectionArray: ['1', '3', '6']
//   },
//   {
//     id: '10',
//     userName: 'danieljohnson',
//     password: 'purple',
//     displayName: 'Daniel Johnson',
//     email: 'daniel@example.com',
//     coinBalance: 1000,
//     friends: ['7', '8', '9'],
//     friendGroups: ['2', '4'],
//     selectionArray: ['3', '4', '7']
//   },
//   {
//     id: '11',
//     userName: 'emilydavis',
//     password: 'pink',
//     displayName: 'Emily Davis',
//     email: 'emily@example.com',
//     coinBalance: 1250,
//     friends: ['12', '13', '14'],
//     friendGroups: ['3', '5'],
//     selectionArray: ['2', '5', '7']
//   },
//   {
//     id: '12',
//     userName: 'frankwilson',
//     password: 'cyan',
//     displayName: 'Frank Wilson',
//     email: 'frank@example.com',
//     coinBalance: 800,
//     friends: ['11', '13', '14'],
//     friendGroups: ['1', '5'],
//     selectionArray: ['4', '6', '8']
//   },
//   {
//     id: '13',
//     userName: 'georgehill',
//     password: 'gray',
//     displayName: 'George Hill',
//     email: 'george@example.com',
//     coinBalance: 1100,
//     friends: ['11', '12', '14'],
//     friendGroups: ['2', '5'],
//     selectionArray: ['1', '5', '9']
//   },
//   {
//     id: '14',
//     userName: 'helenmartin',
//     password: 'magenta',
//     displayName: 'Helen Martin',
//     email: 'helen@example.com',
//     coinBalance: 1400,
//     friends: ['11', '12', '13'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['2', '6', '9']
//   },
//   {
//     id: '15',
//     userName: 'ianlee',
//     password: 'brown',
//     displayName: 'Ian Lee',
//     email: 'ian@example.com',
//     coinBalance: 850,
//     friends: ['16', '17', '18'],
//     friendGroups: ['4', '5'],
//     selectionArray: ['3', '5', '10']
//   },
//   {
//     id: '16',
//     userName: 'jessicaclark',
//     password: 'teal',
//     displayName: 'Jessica Clark',
//     email: 'jessica@example.com',
//     coinBalance: 950,
//     friends: ['15', '17', '18'],
//     friendGroups: ['2', '4'],
//     selectionArray: ['1', '4', '7']
//   },
//   {
//     id: '17',
//     userName: 'kevinmoore',
//     password: 'black',
//     displayName: 'Kevin Moore',
//     email: 'kevin@example.com',
//     coinBalance: 1300,
//     friends: ['15', '16', '18'],
//     friendGroups: ['3', '5'],
//     selectionArray: ['2', '6', '8']
//   },
//   {
//     id: '18',
//     userName: 'laurawhite',
//     password: 'gold',
//     displayName: 'Laura White',
//     email: 'laura@example.com',
//     coinBalance: 1000,
//     friends: ['15', '16', '17'],
//     friendGroups: ['1', '5'],
//     selectionArray: ['4', '7', '9']
//   },
//   {
//     id: '19',
//     userName: 'michaelscott',
//     password: 'green',
//     displayName: 'Michael Scott',
//     email: 'michael@example.com',
//     coinBalance: 950,
//     friends: ['20', '21', '22'],
//     friendGroups: ['2', '4'],
//     selectionArray: ['3', '5', '10']
//   },
//   {
//     id: '20',
//     userName: 'natalieadams',
//     password: 'white',
//     displayName: 'Natalie Adams',
//     email: 'natalie@example.com',
//     coinBalance: 1100,
//     friends: ['19', '21', '22'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['1', '5', '9']
//   },
//   {
//     id: '21',
//     userName: 'oliverthompson',
//     password: 'blue',
//     displayName: 'Oliver Thompson',
//     email: 'oliver@example.com',
//     coinBalance: 1200,
//     friends: ['19', '20', '22'],
//     friendGroups: ['2', '5'],
//     selectionArray: ['2', '6', '9']
//   },
//   {
//     id: '22',
//     userName: 'paulgarcia',
//     password: 'purple',
//     displayName: 'Paul Garcia',
//     email: 'paul@example.com',
//     coinBalance: 1350,
//     friends: ['19', '20', '21'],
//     friendGroups: ['1', '5'],
//     selectionArray: ['3', '4', '7']
//   },
//   {
//     id: '23',
//     userName: 'quincyroberts',
//     password: 'orange',
//     displayName: 'Quincy Roberts',
//     email: 'quincy@example.com',
//     coinBalance: 1250,
//     friends: ['24', '25', '26'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['2', '5', '8']
//   },
//   {
//     id: '24',
//     userName: 'rachelking',
//     password: 'red',
//     displayName: 'Rachel King',
//     email: 'rachel@example.com',
//     coinBalance: 1100,
//     friends: ['23', '25', '26'],
//     friendGroups: ['2', '4'],
//     selectionArray: ['1', '5', '9']
//   },
//   {
//     id: '25',
//     userName: 'sarahlopez',
//     password: 'brown',
//     displayName: 'Sarah Lopez',
//     email: 'sarah@example.com',
//     coinBalance: 1200,
//     friends: ['23', '24', '26'],
//     friendGroups: ['1', '5'],
//     selectionArray: ['3', '6', '9']
//   },
//   {
//     id: '26',
//     userName: 'tommorris',
//     password: 'yellow',
//     displayName: 'Tom Morris',
//     email: 'tom@example.com',
//     coinBalance: 1350,
//     friends: ['23', '24', '25'],
//     friendGroups: ['3', '5'],
//     selectionArray: ['2', '7', '10']
//   },
//   {
//     id: '27',
//     userName: 'ursulahall',
//     password: 'pink',
//     displayName: 'Ursula Hall',
//     email: 'ursula@example.com',
//     coinBalance: 1400,
//     friends: ['28', '29', '30'],
//     friendGroups: ['2', '4'],
//     selectionArray: ['1', '4', '8']
//   },
//   {
//     id: '28',
//     userName: 'victorallen',
//     password: 'cyan',
//     displayName: 'Victor Allen',
//     email: 'victor@example.com',
//     coinBalance: 900,
//     friends: ['27', '29', '30'],
//     friendGroups: ['3', '4'],
//     selectionArray: ['2', '5', '9']
//   },
//   {
//     id: '29',
//     userName: 'wendygomez',
//     password: 'blue',
//     displayName: 'Wendy Gomez',
//     email: 'wendy@example.com',
//     coinBalance: 1000,
//     friends: ['27', '28', '30'],
//     friendGroups: ['1', '4'],
//     selectionArray: ['3', '6', '10']
//   },
//   {
//     id: '30',
//     userName: 'xavierlong',
//     password: 'black',
//     displayName: 'Xavier Long',
//     email: 'xavier@example.com',
//     coinBalance: 1200,
//     friends: ['27', '28', '29'],
//     friendGroups: ['2', '5'],
//     selectionArray: ['2', '4', '8']
//   }

// ];

// export const expandedMockFriendGroups = [
//   // Original friend groups
//   {
//     id: '1',
//     groupName: 'Weekend Squad',
//     friends: ['1', '2'],
//     bets: ['1', '2']
//   },
//   {
//     id: '2',
//     groupName: 'Work Buddies',
//     friends: ['1', '3', '4'],
//     bets: ['3', '4', '5']
//   },
//   // Additional friend groups
//   {
//     id: '3',
//     groupName: 'Book Club',
//     friends: ['2', '5', '6'],
//     bets: ['6', '7', '8']
//   },
//   {
//     id: '4',
//     groupName: 'Fitness Fanatics',
//     friends: ['1', '4', '6'],
//     bets: ['9', '10']
//   },
//   {
//     id: '5',
//     groupName: 'Fitness Fanatics',
//     friends: ['1', '4', '6'],
//     bets: ['9', '10', '7']
//   }
//   // ... (continue with friend groups 5-25)
// ];

// export const expandedMockBets = [
//   // Original bets
//   {
//     id: '1',
//     typeBet: 'binary',
//     creator: '1',
//     subject: '2',
//     oddsPos: -150,
//     oddsNeg: 130,
//     description: 'Jane will run a marathon this year',
//     endDate: '2024-12-31',
//     group: '1'
//   },
//   {
//     id: '2',
//     typeBet: 'binary',
//     creator: '2',
//     subject: '1',
//     oddsPos: -200,
//     oddsNeg: 180,
//     description: 'John will get a promotion this quarter',
//     endDate: '2024-06-30',
//     group: '1'
//   },
//   {
//     id: '3',
//     typeBet: 'binary',
//     creator: '3',
//     subject: '4',
//     oddsPos: -120,
//     oddsNeg: 100,
//     description: 'Alice will learn to play guitar',
//     endDate: '2024-09-30',
//     group: '2'
//   },
//   {
//     id: '4',
//     typeBet: 'binary',
//     creator: '1',
//     subject: '3',
//     oddsPos: -180,
//     oddsNeg: 160,
//     description: 'Bob will travel to Europe this summer',
//     endDate: '2024-08-31',
//     group: '2'
//   },
//   {
//     id: '5',
//     typeBet: 'binary',
//     creator: '4',
//     subject: '1',
//     oddsPos: -110,
//     oddsNeg: 90,
//     description: 'John will adopt a pet this year',
//     endDate: '2024-12-31',
//     group: '2'
//   },
//   // Additional bets
//   {
//     id: '6',
//     typeBet: 'binary',
//     creator: '5',
//     subject: '2',
//     oddsPos: -130,
//     oddsNeg: 110,
//     description: 'Jane will publish a book this year',
//     endDate: '2024-12-31',
//     group: '3'
//   },
//   {
//     id: '7',
//     typeBet: 'binary',
//     creator: '6',
//     subject: '5',
//     oddsPos: -160,
//     oddsNeg: 140,
//     description: 'Emma will start a successful YouTube channel',
//     endDate: '2024-10-31',
//     group: '3'
//   },
//   {
//     id: '8',
//     typeBet: 'binary',
//     creator: '7',
//     subject: '2',
//     oddsPos: 200,
//     oddsNeg: -250,
//     description: 'John will run a marathon under 4 hours',
//     endDate: '2024-12-01',
//     group: '2'
//   },
//   {
//     id: '9',
//     typeBet: 'binary',
//     creator: '8',
//     subject: '3',
//     oddsPos: -110,
//     oddsNeg: 120,
//     description: 'Sarah will pass her final exams with honors',
//     endDate: '2024-11-15',
//     group: '1'
//   },
//   {
//     id: '10',
//     typeBet: 'binary',
//     creator: '9',
//     subject: '1',
//     oddsPos: -180,
//     oddsNeg: 150,
//     description: 'Mike will complete his first Ironman triathlon',
//     endDate: '2024-10-15',
//     group: '3'
//   },
//   {
//     id: '11',
//     typeBet: 'binary',
//     creator: '10',
//     subject: '5',
//     oddsPos: 130,
//     oddsNeg: -150,
//     description: 'Emily will get a promotion at work before the end of the year',
//     endDate: '2024-12-31',
//     group: '2'
//   },
//   {
//     id: '12',
//     typeBet: 'binary',
//     creator: '11',
//     subject: '8',
//     oddsPos: -200,
//     oddsNeg: 170,
//     description: 'Jessica will win the tennis championship',
//     endDate: '2024-10-25',
//     group: '1'
//   },
//   {
//     id: '13',
//     typeBet: 'binary',
//     creator: '12',
//     subject: '6',
//     oddsPos: 150,
//     oddsNeg: -190,
//     description: 'Daniel will publish his first novel',
//     endDate: '2024-11-20',
//     group: '3'
//   },
//   {
//     id: '14',
//     typeBet: 'binary',
//     creator: '13',
//     subject: '4',
//     oddsPos: -120,
//     oddsNeg: 140,
//     description: 'Laura will adopt a new pet before the end of the year',
//     endDate: '2024-12-30',
//     group: '2'
//   },
//   {
//     id: '15',
//     typeBet: 'binary',
//     creator: '14',
//     subject: '9',
//     oddsPos: -160,
//     oddsNeg: 130,
//     description: 'Kevin will pass his driving test on the first attempt',
//     endDate: '2024-10-12',
//     group: '1'
//   },
//   {
//     id: '16',
//     typeBet: 'binary',
//     creator: '15',
//     subject: '11',
//     oddsPos: 120,
//     oddsNeg: -170,
//     description: 'George will win the company\'s employee of the year award',
//     endDate: '2024-12-15',
//     group: '3'
//   },
//   {
//     id: '17',
//     typeBet: 'binary',
//     creator: '16',
//     subject: '12',
//     oddsPos: -130,
//     oddsNeg: 140,
//     description: 'Frank will complete his first half-marathon',
//     endDate: '2024-11-10',
//     group: '2'
//   },
//   {
//     id: '18',
//     typeBet: 'binary',
//     creator: '17',
//     subject: '13',
//     oddsPos: -110,
//     oddsNeg: 120,
//     description: 'Paul will buy a new car before December',
//     endDate: '2024-12-01',
//     group: '1'
//   },
//   {
//     id: '19',
//     typeBet: 'binary',
//     creator: '18',
//     subject: '14',
//     oddsPos: 150,
//     oddsNeg: -200,
//     description: 'Quincy will get accepted into a graduate program',
//     endDate: '2024-11-30',
//     group: '3'
//   },
//   {
//     id: '20',
//     typeBet: 'binary',
//     creator: '19',
//     subject: '15',
//     oddsPos: -140,
//     oddsNeg: 130,
//     description: 'Tom will finish his startup project by year-end',
//     endDate: '2024-12-20',
//     group: '2'
//   },
//   {
//     id: '21',
//     typeBet: 'binary',
//     creator: '20',
//     subject: '16',
//     oddsPos: 120,
//     oddsNeg: -160,
//     description: 'Wendy will get a new job offer within 3 months',
//     endDate: '2024-11-15',
//     group: '1'
//   },
//   {
//     id: '22',
//     typeBet: 'binary',
//     creator: '21',
//     subject: '17',
//     oddsPos: 170,
//     oddsNeg: -190,
//     description: 'Victor will move to a new city by November',
//     endDate: '2024-11-01',
//     group: '3'
//   },
//   {
//     id: '23',
//     typeBet: 'binary',
//     creator: '22',
//     subject: '18',
//     oddsPos: -180,
//     oddsNeg: 150,
//     description: 'Ursula will complete her marathon training program',
//     endDate: '2024-12-05',
//     group: '2'
//   },
//   {
//     id: '24',
//     typeBet: 'binary',
//     creator: '23',
//     subject: '19',
//     oddsPos: -140,
//     oddsNeg: 130,
//     description: 'Xavier will participate in a triathlon',
//     endDate: '2024-10-20',
//     group: '1'
//   },
//   {
//     id: '25',
//     typeBet: 'binary',
//     creator: '24',
//     subject: '20',
//     oddsPos: 120,
//     oddsNeg: -160,
//     description: 'Yolanda will start a new business',
//     endDate: '2024-11-25',
//     group: '3'
//   },
//   {
//     id: '26',
//     typeBet: 'binary',
//     creator: '25',
//     subject: '21',
//     oddsPos: -110,
//     oddsNeg: 120,
//     description: 'Rachel will reach 10k followers on Instagram',
//     endDate: '2024-12-15',
//     group: '2'
//   },
//   {
//     id: '27',
//     typeBet: 'binary',
//     creator: '26',
//     subject: '22',
//     oddsPos: 140,
//     oddsNeg: -180,
//     description: 'Oliver will invest in the stock market before the end of the year',
//     endDate: '2024-11-20',
//     group: '1'
//   },
//   {
//     id: '28',
//     typeBet: 'binary',
//     creator: '27',
//     subject: '23',
//     oddsPos: 150,
//     oddsNeg: -200,
//     description: 'Natalie will publish her first research paper',
//     endDate: '2024-10-30',
//     group: '3'
//   }
  
//   // ... (continue with bets 8-100)
// ];
