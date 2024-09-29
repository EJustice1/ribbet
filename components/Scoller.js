import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from './Cards'; // Import the Card component

// Define the ScrollableList component
const ScrollableList = ({ cardsData, numberOfCardsToShow }) => {
  // Limit the number of cards to display
  const dataToShow = cardsData.slice(0, numberOfCardsToShow);

  return (
    <FlatList
      data={dataToShow}
      renderItem={({ item }) => <Card title={item.title} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

// Define styles for ScrollableList component
const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default ScrollableList;
