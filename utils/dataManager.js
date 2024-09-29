// utils/dataManager.js

import { Profile, FriendGroup, Bet } from '../Classes';
import { mockUsers, mockFriendGroups, mockBets } from '../auth/mockData';

export const populateUserData = (userId) => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) return null;

  const profile = new Profile(user.name, user.age, user.email);

  const friends = user.friends.map(friendId => {
    const friend = mockUsers.find(u => u.id === friendId);
    return new Profile(friend.name, friend.age, friend.email);
  });

  const friendGroups = user.friendGroups.map(groupId => {
    const group = mockFriendGroups.find(g => g.id === groupId);
    const groupFriends = group.friends.map(friendId => {
      const friend = mockUsers.find(u => u.id === friendId);
      return new Profile(friend.name, friend.age, friend.email);
    });
    const groupBets = group.bets.map(betId => {
      const bet = mockBets.find(b => b.id === betId);
      return new Bet(bet.id, bet.amount, bet.outcome, bet.status);
    });
    return new FriendGroup(group.groupName, groupFriends, groupBets);
  });

  const bets = user.bets.map(betId => {
    const bet = mockBets.find(b => b.id === betId);
    return new Bet(bet.id, bet.amount, bet.outcome, bet.status);
  });

  return { profile, friends, friendGroups, bets };
};