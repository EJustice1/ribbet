// // utils/dataManager.js

// utils/dataManager.js

// utils/dataManager.js

import { 
  Profile, 
  FriendGroup, 
  Bet, 
  Selections, 
  populateProfile, 
  populateFriendGroup, 
  populateBet, 
  populateSelection 
} from '../components/Classes';
import { mockUsers, mockFriendGroups, mockBets, mockSelections } from '../app/auth/mockData';

export const populateUserData = (userId) => {
  console.log('Starting populateUserData for userId:', userId);
  
  const userData = mockUsers.find(u => u.id === userId);
  if (!userData) {
    console.log('User not found in mockUsers');
    return null;
  }
  console.log('Found user data:', userData);

  // Populate all bets
  console.log('Populating bets...');
  const allBets = mockBets.map(bet => {
    console.log('Processing bet:', bet);
    return populateBet(bet, mockUsers);
  });
  console.log('All bets populated:', allBets);

  // Populate all friend groups
  console.log('Populating friend groups...');
  const allGroups = mockFriendGroups.map(group => {
    console.log('Processing group:', group);
    const groupBets = group.bets.map(betId => {
      const bet = allBets.find(b => b.id === betId);
      if (!bet) console.log('Bet not found for id:', betId);
      return bet;
    });
    return populateFriendGroup({...group, bets: groupBets}, mockUsers, allBets);
  });
  console.log('All groups populated:', allGroups);

  // Update bets with their group references
  console.log('Updating bets with group references...');
  allBets.forEach(bet => {
    console.log('Updating bet:', bet);
    const group = allGroups.find(g => g.id === bet.group);
    if (!group) console.log('Group not found for bet:', bet);
    bet.group = group;
  });

  // Populate all selections
  console.log('Populating selections...');
  const allSelections = mockSelections.map(selection => populateSelection(selection, allBets));
  console.log('All selections populated:', allSelections);

  // Populate the user's profile
  console.log('Populating user profile...');
  const profile = populateProfile(userData, mockUsers, allGroups, allSelections);
  console.log('User profile populated:', profile);

  // Filter friends, groups, and bets specific to the user
  // console.log('Filtering user-specific data...');
  // const friends = profile.friends.map(friendId => 
  //   populateProfile(mockUsers.find(u => u.id === friendId), mockUsers, allGroups, allSelections)
  // );
  // const friendGroups = profile.friendGroups.map(groupId => 
  //   allGroups.find(g => g.id === groupId)
  // );
  const friends = profile && profile.friends 
    ? profile.friends.map(friendId => {
        const friendData = mockUsers.find(u => u.id === friendId);
        return friendData 
          ? populateProfile(friendData, mockUsers, allGroups, allSelections)
          : null;
      }).filter(friend => friend !== null)
    : [];
  
  const friendGroups = profile && profile.friendGroups
    ? profile.friendGroups.map(groupId => allGroups.find(g => g.id === groupId)).filter(group => group !== undefined)
    : [];
  const bets = allBets.filter(bet => 
    bet.creator.id === userId || bet.subject.id === userId || friendGroups.some(g => g.bets.includes(bet))
  );

  console.log('Finished populating user data');
  return { profile, friends, friendGroups, bets };
};


