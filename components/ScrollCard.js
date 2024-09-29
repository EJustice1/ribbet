import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { OddsButton } from './Button';

const ScrollCard = ({ league, status, time, title, team1, team2, score1, score2, odds1, odds2 }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.league}>{league}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={styles.status}>{status}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.teamsContainer}>
        <View style={styles.teamColumn}>
          <Text style={styles.teamName}>{team1}</Text>
          <Text style={styles.score}>{score1}</Text>
          <OddsButton odds={odds1} isPositive={odds1.startsWith('+')} />
        </View>
        <View style={styles.teamColumn}>
          <Text style={styles.teamName}>{team2}</Text>
          <Text style={styles.score}>{score2}</Text>
          <OddsButton odds={odds2} isPositive={odds2.startsWith('+')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  league: {
    color: '#ffffff',
    fontSize: 14,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginRight: 5,
  },
  status: {
    color: '#ffffff',
    fontSize: 14,
  },
  time: {
    color: '#ffffff',
    fontSize: 14,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamColumn: {
    alignItems: 'center',
  },
  teamName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  score: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ScrollCard;