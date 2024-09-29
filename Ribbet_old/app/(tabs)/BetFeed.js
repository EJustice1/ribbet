import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import ScrollCard from '../../components/ScrollCard';
import ActiveBetCard from '../../components/ActiveBetCard'; // New component
import { useUserData } from '../../utils/UserDataContext';
import { FloatingActionButton } from '../../components/FloatingActionButton';

const BetFeed = () => {
  const { userData } = useUserData();
  const [betCards, setBetCards] = useState([]);
  const [friendGroups, setFriendGroups] = useState(['All']);
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [selectedBet, setSelectedBet] = useState(null);
  const [selectedOdds, setSelectedOdds] = useState(null);
  const [activeBets, setActiveBets] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPicksModalVisible, setIsPicksModalVisible] = useState(false);

  useEffect(() => {
    console.log('userData:', userData);
    if (userData && userData.bets && Array.isArray(userData.bets)) {
      const transformedBets = userData.bets.map(bet => ({
        id: bet.id || Math.random().toString(),
       // title: bet.title || 'Untitled Bet',  // Example property for bet title
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

  const handleOddsButtonClick = (bet, odds) => {
    setSelectedBet(bet);
    setSelectedOdds(odds);
  };

  const handleFloatingActionClick = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const confirmBet = () => {
    if (selectedBet) {
      // Add the bet to activeBets list with selected odds
      setActiveBets([...activeBets, { ...selectedBet, selectedOdds }]);
      // Clear selected bet after confirming
      setSelectedBet(null);
      setSelectedOdds(null);
      closeModal();
    }
  };

  const openPicksModal = () => {
    setIsPicksModalVisible(true);
  };

  const closePicksModal = () => {
    setIsPicksModalVisible(false);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.picksContainer}>
          <TouchableOpacity onPress={openPicksModal}>
            <Text style={styles.picksNumber}>{activeBets.length}</Text>
            <Text style={styles.picksLabel}>My Picks</Text>
          </TouchableOpacity>
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
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ScrollCard {...item} onOddsButtonClick={(odds) => handleOddsButtonClick(item, odds)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedList}
        ListEmptyComponent={<Text style={styles.loadingText}>No bets available for this group</Text>}
      />
      {selectedBet && (
        <FloatingActionButton onPress={handleFloatingActionClick} />
      )}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirm your bet on whether {selectedBet?.description}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={confirmBet}>
              <Text style={styles.modalButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isPicksModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>My Picks</Text>
            {activeBets.map(bet => (
              <ActiveBetCard key={bet.id} description={bet.description} selectedOdds={bet.selectedOdds} />
            ))}
            <TouchableOpacity style={styles.modalButton} onPress={closePicksModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5C7D7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#A5C7D7',
  },
  picksContainer: {
    alignItems: 'center',
  },
  picksNumber: {
    color: '#fff',
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
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  coinsLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  groupBarContainer: {
    backgroundColor: '#A5C7D7',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#fff',
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
    backgroundColor: '#A5E490',
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
    alignItems: 'center', // Align children (cards) in the center horizontally
  },
  cardContainer: {
    width: '90%', // This line makes the item (card container) take 90% of the width
    marginBottom: 10, // Adjust vertical spacing as needed
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BetFeed;