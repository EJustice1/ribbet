import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// OddsButton Component
export const OddsButton = ({ odds, isPositive, onOddsButtonClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected((prevSelected) => !prevSelected);
    if (onOddsButtonClick) {
      onOddsButtonClick();
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.oddsButton, 
        isPositive ? styles.positiveOdds : styles.negativeOdds, 
        isSelected ? styles.selected : styles.unselected
      ]}
      onPress={handlePress}
    >
      <Text style={styles.oddsText}>{odds}</Text>
    </TouchableOpacity>
  );
};

// PrimaryButton Component
export const PrimaryButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
    <Text style={styles.primaryButtonText}>{title}</Text>
  </TouchableOpacity>
);

// SecondaryButton Component
export const SecondaryButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
    <Text style={styles.secondaryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  oddsButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  positiveOdds: {
    borderColor: '#fff',
  },
  negativeOdds: {
    borderColor: '#000fff000',
  },
  selected: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  unselected: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },
  oddsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4a90e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Export components
export default { OddsButton, PrimaryButton, SecondaryButton };