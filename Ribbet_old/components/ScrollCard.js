import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { OddsButton } from './Button';

// Helper function to format odds
const formatOdds = (odds) => {
  if (odds >= 0) {
    return `+${odds}`;
  } else {
    return odds.toString();
  }
};

const ScrollCard = ({ creator, subject, oddsPos, oddsNeg, description, endDate, group, onOddsButtonClick }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.personContainer}>
          <Text style={styles.label}>Subject</Text>
          <Text style={styles.personName}>{subject}</Text>
        </View>
        <View style={styles.personContainer}>
          <Text style={styles.label}>Creator</Text>
          <Text style={styles.personName}>{creator}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.oddsContainer}>
        <OddsButton odds={formatOdds(oddsPos)} isPositive={oddsPos >= 0} onOddsButtonClick={() => onOddsButtonClick(oddsPos)} />
        <OddsButton odds={formatOdds(oddsNeg)} isPositive={oddsNeg >= 0} onOddsButtonClick={() => onOddsButtonClick(oddsNeg)} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.endDate}>{new Date(endDate).toLocaleDateString()}</Text>
        <Text style={styles.group}>{group}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A5E490',
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
  personContainer: {
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 2,
  },
  personName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  oddsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endDate: {
    color: '#ffffff',
    fontSize: 12,
  },
  group: {
    color: '#ffffff',
    fontSize: 12,
  },
});

export default ScrollCard;