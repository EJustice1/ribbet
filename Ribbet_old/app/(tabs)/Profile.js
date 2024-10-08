import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Image, ScrollView, View, Text, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileCard from '../../components/ProfileCard';
import { useUserData } from '../../utils/UserDataContext';

const availableIcons = [
  require("./assets/frog_default.png"),
  require("./assets/frog.png"),
  require("./assets/frog_suit.png"),
  require("./assets/frog_fedora.png"),
  require("./assets/frog_space.png"),
  require("./assets/frog_gojo.png"),
  require("./assets/frog_wizard.png"),
  require("./assets/frog_crown.png"),
  require("./assets/frog_clown.png"),
];

export default function Profile() {
  const { userData } = useUserData();
  const [groupData, setGroupData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [usernames, setUsernames] = useState(['']);
  const [selectedIcon, setSelectedIcon] = useState(availableIcons[0]);

  useEffect(() => {
    if (userData && userData.profile && userData.profile.friendGroups) {
      const transformedGroups = userData.profile.friendGroups.map(group => ({
        id: group.id,
        groupName: group.groupName,
        size: group.friends ? group.friends.length : 0
      }));
      setGroupData(transformedGroups);
    }
  }, [userData]);

  const handleAddGroup = () => {
    Alert.alert('Group Created', `Group Name: ${groupName}\nUsernames: ${usernames.join(', ')}`);
    setModalVisible(false);
    setGroupName('');
    setUsernames(['']);
  };

  const handleAddUsernameField = () => {
    setUsernames([...usernames, '']);
  };

  const handleUsernameChange = (text, index) => {
    const updatedUsernames = [...usernames];
    updatedUsernames[index] = text;
    setUsernames(updatedUsernames);
  };

  const handleIconPress = (icon) => {
    setSelectedIcon(icon);
    setIconModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileBackground} />
        <TouchableOpacity style={styles.profileImageContainer} onPress={() => setIconModalVisible(true)}>
          <Image source={selectedIcon} style={styles.image} resizeMode="center" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleBar} />
        <FlatList
          data={groupData}
          renderItem={({ item }) => <ProfileCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.feedList}
          ListEmptyComponent={<Text style={styles.emptyText}>No friend groups available</Text>}
        />
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
      {/* Modal for adding a group */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>New Group</Text>
            <TextInput
              style={[styles.input, styles.modalText]}
              placeholder="Group Name"
              value={groupName}
              onChangeText={setGroupName}
              placeholderTextColor="#fff" // Changes placeholder text color
            />
            {usernames.map((username, index) => (
              <TextInput
                key={index}
                style={[styles.input, styles.modalText]}
                placeholder={`Username ${index + 1}`}
                value={username}
                onChangeText={(text) => handleUsernameChange(text, index)}
                placeholderTextColor="#fff" // Changes placeholder text color
              />
            ))}
            <TouchableOpacity style={styles.addUsernameButton} onPress={handleAddUsernameField}>
              <Text style={styles.addUsernameButtonText}>Add Username</Text>
            </TouchableOpacity>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#fff" />
              <Button title="Add Group" onPress={handleAddGroup} color="#fff" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for changing profile icon */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={iconModalVisible}
        onRequestClose={() => setIconModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.iconModalView}>
            <Text style={styles.modalTitle}>Choose an Icon</Text>
            <ScrollView contentContainerStyle={styles.iconContainer}>
              {availableIcons.map((icon, index) => (
                <TouchableOpacity key={index} onPress={() => handleIconPress(icon)} style={styles.iconWrapper}>
                  <Image source={icon} style={styles.iconImage} resizeMode="center" />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setIconModalVisible(false)} color="#fff" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5C7D7",
  },
  text: {
    fontFamily: "ComicSans",
    color: "#52575D",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    zIndex: 2, // Ensure the profile picture stays above the background
  },
  feedList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  // Section to hold the profile image and background
  profileSection: {
    position: 'absolute',
    top: 24, // Align with the top of the screen
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1, // Ensure it stays above the scrollable content
  },
  // Background rectangle behind the profile image
  profileBackground: {
    width: '100%',
    height: 220, // Decreased height of background to reduce space
    backgroundColor: '#A5C7D7', // Set the background color
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Background stays behind the profile picture
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, // Optional: Add rounded corners to the background
  },
  // Add padding to the scrollable section to prevent it from going behind the static objects
  scrollContainer: {
    paddingTop: 230, // Reduced padding to move content closer to the static profile section
    paddingBottom: 80, // Avoid overlapping with the floating button
  },
  // Style for floating button
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#A5E490',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Modal overlay to centralize the modal content
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // Modal container style
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#A5E490',
    borderRadius: 10,
    alignItems: 'center',
  },
  iconModalView: {
    width: 300,
    height: 400, // Increased height to accommodate icons
    backgroundColor: '#A5E490',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  // Style for modal title
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    color: '#fff', // Change modal title color
  },
  // Icon list container
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  // Icon wrapper style
  iconWrapper: {
    margin: 5,
  },
  // Individual icon image style
  iconImage: {
    width: 60,
    height: 60,
  },
  // Style for text input fields
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 5,
  },
  modalText: {
    color: '#fff', // Change input text color
  },
  // Button container in the modal
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  // Style for "Add Username" button
  addUsernameButton: {
    backgroundColor: '#A5C7D7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  addUsernameButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});