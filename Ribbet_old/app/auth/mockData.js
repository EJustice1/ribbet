// auth/mockData.js

export const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      friends: ['2', '3'],
      friendGroups: ['1', '2'],
      bets: ['1', '2', '3']
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 28,
      email: 'jane@example.com',
      friends: ['1', '3'],
      friendGroups: ['1'],
      bets: ['2', '4']
    },
    {
      id: '3',
      name: 'Bob Johnson',
      age: 35,
      email: 'bob@example.com',
      friends: ['1', '2'],
      friendGroups: ['2'],
      bets: ['1', '4']
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
      friends: ['1', '3'],
      bets: ['3', '4']
    }
  ];
  
  export const mockBets = [
    {
      id: '1',
      amount: 50,
      outcome: 'win',
      status: 'completed'
    },
    {
      id: '2',
      amount: 30,
      outcome: 'loss',
      status: 'completed'
    },
    {
      id: '3',
      amount: 100,
      outcome: null,
      status: 'pending'
    },
    {
      id: '4',
      amount: 75,
      outcome: null,
      status: 'pending'
    }
  ];