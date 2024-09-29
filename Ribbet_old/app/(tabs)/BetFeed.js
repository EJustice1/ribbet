import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import BetCard from '../../components/ScrollCard'; // Adjust the import path as necessary

const feedData = [
  {
    id: '1',
    league: 'NCAAF',
    status: '4th Quarter',
    time: '14',
    title: 'College Football',
    team1: 'BYU',
    team2: 'Baylor Bears',
    score1: '34',
    score2: '28',
    odds1: '-425',
    odds2: '+255',
  },
  {
    id: '2',
    league: 'NCAAF',
    status: '4th Quarter',
    time: '12',
    title: 'College Football',
    team1: 'Kentucky',
    team2: 'Mississippi',
    score1: '13',
    score2: '17',
    odds1: '+685',
    odds2: '-2545',
  },
  // Add more feed items here
];

const BetFeed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedData}
        renderItem={({ item }) => <BetCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  feedList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default BetFeed;