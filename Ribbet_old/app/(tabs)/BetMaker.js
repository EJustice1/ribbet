import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Button, ButtonGroup } from 'react-native-elements';
import Slider from '@react-native-community/slider';

export default function BetMaker() {
 const [selectedIndex, setSelectedIndex] = useState(0);
 const [group, setGroup] = useState('');
 const [person, setPerson] = useState('');
 const [betTitle, setBetTitle] = useState('');
 const [betLine, setBetLine] = useState(-100); // Initialize with smallest allowable value
 const [expectedNumber, setExpectedNumber] = useState('');

 const buttons = ['Yes/No', 'Over/Under'];

 const groupData = [
   { label: 'Group 1', value: 'group1' },
   { label: 'Group 2', value: 'group2' },
   { label: 'Group 3', value: 'group3' },
 ];

 const personData = [
   { label: 'No Person Selected', value: '' },
   { label: 'Person 1', value: 'person1' },
   { label: 'Person 2', value: 'person2' },
   { label: 'Person 3', value: 'person3' },
 ];

 const formatBetLine = (value) => (value > 0 ? `+${value}` : `${value}`);

 const handleConfirm = () => {
   console.log('Bet Confirmed:', {
     group,
     person,
     betTitle,
     betLine: selectedIndex === 0 ? betLine : expectedNumber,
     selectedIndex,
   });
   // You can add any other logic you need to handle the confirmation here.
 };

 const handleSliderChange = (value) => {
   const invertedValue = -value; // Reverse the polarity
   if (invertedValue > -100 && invertedValue < 100) {
     // Skip the range between -100 and 100 and set to closest non-zero value
     setBetLine(invertedValue > 0 ? 100 : -100);
   } else {
     setBetLine(invertedValue);
   }
 };

 const isConfirmDisabled = !group || !betTitle || (selectedIndex === 0 && !betLine) || (selectedIndex === 1 && !expectedNumber);

 return (
   <View style={styles.container}>
     <ButtonGroup
       onPress={(value) => setSelectedIndex(value)}
       selectedIndex={selectedIndex}
       buttons={buttons}
       containerStyle={styles.buttonGroup}
       selectedButtonStyle={styles.selectedButton} // Apply custom selected button style
     />

     <TextInput
       style={styles.textInput}
       placeholder="Enter the Bet Title"
       placeholderTextColor="rgba(255, 255, 255, 0.6)" // Placeholder text color
       value={betTitle}
       onChangeText={setBetTitle}
     />

     <View style={styles.dropdownsContainer}>
       <View style={styles.dropdownWrapper}>
         <Text style={styles.labelText}>Group:</Text>
         <Dropdown
           style={[styles.dropdown, group ? styles.dropdownSelected : {}]}
           data={groupData}
           labelField="label"
           valueField="value"
           placeholder="Select Group"
           value={group}
           onChange={(item) => setGroup(item.value)}
           labelStyle={styles.dropdownText}          // Custom text style
           selectedTextStyle={styles.dropdownText}  // Custom selected text style
           placeholderStyle={styles.dropdownText}  // Custom placeholder style
         />
       </View>

       <View style={styles.dropdownWrapper}>
         <Text style={styles.labelText}>Person of Interest:</Text>
         <Dropdown
           style={[
             styles.dropdown,
             group ? styles.dropdownSelected : styles.dropdownDisabled,
           ]}
           data={personData}
           labelField="label"
           valueField="value"
           placeholder="No Person Selected"
           value={person}
           onChange={(item) => setPerson(item.value)}
           disabled={!group}
           labelStyle={styles.dropdownText}          // Custom text style
           selectedTextStyle={styles.dropdownText}  // Custom selected text style
           placeholderStyle={styles.dropdownText}  // Custom placeholder style
         />
       </View>
     </View>

     {selectedIndex === 0 ? (
       <>
         <View style={styles.betLineContainer}>
           <View style={styles.betLineWrapper}>
             <Text style={styles.labelText}>Event Doesn't Happen:</Text>
             <Text style={styles.betLineText}>{formatBetLine(-betLine)}</Text>
           </View>
           <View style={styles.betLineWrapper}>
             <Text style={styles.labelText}>Event Happens:</Text>
             <Text style={styles.betLineText}>{formatBetLine(betLine)}</Text>
           </View>
         </View>
         <Slider
           style={styles.slider}
           minimumValue={-1000}
           maximumValue={1000}
           step={100}
           value={-betLine} // Reverse the polarity to match the display
           onValueChange={handleSliderChange}
         />
       </>
     ) : (
       <TextInput
         style={styles.textInput}
         placeholder="Enter Expected Number"
         placeholderTextColor="rgba(255, 255, 255, 0.6)" // Placeholder text color
         keyboardType="numeric"
         value={expectedNumber}
         onChangeText={setExpectedNumber}
       />
     )}

     <Button
       title="Confirm"
       onPress={handleConfirm}
       buttonStyle={styles.confirmButton}
       disabled={isConfirmDisabled}
     />
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 20,
   backgroundColor: '#A5C7D7', // Set background color here
 },
 buttonGroup: {
   marginVertical: 20,
   marginHorizontal: 10,
 },
 selectedButton: {
   backgroundColor: '#A5E490', // Set selected button color here
 },
 dropdownsContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   width: '100%',
 },
 dropdownWrapper: {
   flex: 1,
   marginHorizontal: 5,
 },
 dropdownContainer: {
   width: '100%',
 },
 dropdown: {
   height: 40,
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 10, // Update border radius here
   width: '100%',
   paddingHorizontal: 10,
   marginVertical: 10,
 },
 dropdownSelected: {
   borderColor: 'dodgerdodgerblue',
 },
 dropdownDisabled: {
   backgroundColor: '#d3d3d3', // Light #A5E490 background
   borderColor: 'white',
 },
 dropdownText: {
   color: 'white', // Set text color to white
 },
 textInput: {
   height: 40,
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 10, // Update border radius here
   width: '100%',
   paddingHorizontal: 10,
   marginVertical: 10,
   color: 'white', // Set text color to white
 },
 labelText: {
   color: 'white', // Set label text color to white
 },
 betLineContainer: {
   width: '100%',
   paddingHorizontal: 10,
   marginVertical: 20,
   flexDirection: 'row',
   justifyContent: 'space-between',
 },
 betLineWrapper: {
   flex: 1,
   alignItems: 'center',
 },
 betLineText: {
   fontSize: 18,
   fontWeight: 'bold',
   color: 'white', // Set bet line text color to white
 },
 slider: {
   width: '100%',
   marginVertical: 20,
 },
 confirmButton: {
   backgroundColor: 'dodgerblue',
   marginTop: 20,
   width: '100%',
   padding: 15,
 },
});