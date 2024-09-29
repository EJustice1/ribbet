import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ScrollCard from '../../components/ScrollCard';
import { useUserData } from '../../utils/UserDataContext';

const BetFeed = () => {
  const { userData } = useUserData();
  const [betCards, setBetCards] = useState([]);
  const [friendGroups, setFriendGroups] = useState(['All']);
  const [selectedGroup, setSelectedGroup] = useState('All');

  useEffect(() => {
    console.log('userData:', userData);
    if (userData && userData.bets && Array.isArray(userData.bets)) {
      const transformedBets = userData.bets.map(bet => ({
        id: bet.id || Math.random().toString(),
        creator: bet.creator?.displayName || 'Unknown Creator',
        subject: bet.subject?.displayName || 'Unknown Subject',
        oddsPos: Number(bet.oddsPos) || 0,
        oddsNeg: Number(bet.oddsNeg) || 0,
        description: bet.description || 'No description available',
        endDate: bet.endDate || new Date().toISOString(),
        group: bet.group?.groupName || 'No Group',
      }));
      setBetCards(transformedBets);
    } else {
      setBetCards([]);
    }

    if (userData && userData.profile && userData.profile.friendGroups && Array.isArray(userData.profile.friendGroups)) {
      const groups = ['All', ...new Set(userData.profile.friendGroups.map(group => group.groupName))];
      console.log('Friend Groups:', groups);
      setFriendGroups(groups);
    }
  }, [userData]);

  const filteredBets = selectedGroup === 'All'
    ? betCards
    : betCards.filter(bet => bet.group === selectedGroup);

  // const GroupButton = ({ group }) => (
  //   <TouchableOpacity
  //     style={[styles.groupButton, selectedGroup === group && styles.selectedGroupButton]}
  //     onPress={() => setSelectedGroup(group)}
  //   >
  //     <Text style={[styles.groupButtonText, selectedGroup === group && styles.selectedGroupButtonText]}>
  //       {group}
  //     </Text>
  //   </TouchableOpacity>
  // );
  const GroupButton = ({ group }) => (
    <TouchableOpacity
      style={[styles.groupButton, selectedGroup === group && styles.selectedGroupButton]}
      onPress={() => setSelectedGroup(group)}
    >
      <Text style={[styles.groupButtonText, selectedGroup === group && styles.selectedGroupButtonText]}>
        {group}
      </Text>
    </TouchableOpacity>
  );

  console.log('Rendered Friend Groups:', friendGroups);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.picksContainer}>
          <Text style={styles.picksNumber}>{userData?.profile?.selectionArray?.length || 0}</Text>
          <Text style={styles.picksLabel}>My Picks</Text>
        </View>
        <View style={styles.coinsContainer}>
          <Text style={styles.coinsAmount}>{userData?.profile?.coinBalance || 0}</Text>
          <Text style={styles.coinsLabel}>Coins</Text>
        </View>
      </View>
      <View style={styles.groupBarContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.groupBar}
        >
          {friendGroups.map(group => (
            <GroupButton key={group} group={group} />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filteredBets}
        renderItem={({ item }) => <ScrollCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedList}
        ListEmptyComponent={<Text style={styles.loadingText}>No bets available for this group</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2A2A3A',
  },
  picksContainer: {
    alignItems: 'center',
  },
  picksNumber: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  picksLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  coinsContainer: {
    alignItems: 'center',
  },
  coinsAmount: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  coinsLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  groupBarContainer: {
    backgroundColor: '#2A2A3A',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A4A',
  },
  groupBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  groupButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: '#3A3A4A',
  },
  selectedGroupButton: {
    backgroundColor: '#4A90E2',
  },
  groupButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedGroupButtonText: {
    fontWeight: '700',
  },
  feedList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BetFeed;