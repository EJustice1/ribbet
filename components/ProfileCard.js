import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { OddsButton } from './Button';

const ScrollCard = ({ groupName, size}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <Text style={styles.title}>{groupName}</Text>
      <Text style={styles.time}>{size}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A5E490',
    borderRadius: 10,
    padding: 15,
    marginVertical: 11,
    width: Dimensions.get('window').width * 0.9,
  },
  header: {
    flexDirection: 'row', // Makes items go on the same line
    justifyContent: 'space-between', // Spaces groupName and time apart
    alignItems: 'center', // Centers them vertically
  },
  time: {
    color: '#ffffff',
    fontSize: 20,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
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