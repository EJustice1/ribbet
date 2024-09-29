import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ActiveBetCard = ({ description, selectedOdds }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.odds}>{selectedOdds >= 0 ? `+${selectedOdds}` : selectedOdds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E1F5FE',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  odds: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ActiveBetCard;