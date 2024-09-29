import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { View } from 'react-native';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { signIn, signUp } from './auth/MockAuth';
//import Tabs from './tabs/Tabs';

import { Profile, Bet, FriendGroup, populateProfile, populateBet, populateFriendGroup } from '../components/Classes.js';

SplashScreen.preventAutoHideAsync();

const RootLayout = ({ loggedInUsername }) => {
  const [fontsLoaded] = useFonts({
    // Add your custom fonts here if needed
  });

  // const [profile, setProfile] = useState(null);
  // const [friendGroups, setFriendGroups] = useState([]);
  // const [bets, setBets] = useState([]);

  // useEffect(() => {
  //   // Example of fetching data when the user logs in
  //   const fetchUserData = async () => {
  //     const response = await fetch(`https://your-backend.com/api/user/${loggedInUsername}`);
  //     const data = await response.json();

  //     // Populate the classes using data
  //     setProfile(populateProfile(data));
  //     setFriendGroups(data.friendGroups.map(group => populateFriendGroup(group)));
  //     setBets(data.createdBets.map(bet => populateBet(bet)));
  //   };

  //   fetchUserData();
  // }, [loggedInUsername]);
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const handleSignIn = ({ email, password }) => {
    const result = signIn(email, password);
    if (result.success) {
      setUser(result.user);
    } else {
      // Handle error (e.g., show an alert)
      console.error(result.message);
    }
  };

  const handleSignUp = ({ name, email, password }) => {
    const result = signUp(name, email, password);
    if (result.success) {
      setUser(result.user);
    } else {
      // Handle error (e.g., show an alert)
      console.error(result.message);
    }
  };

  const handleSignOut = () => {
    setUser(null);
  };

  if (!fontsLoaded) {
    return null;
  }

  if (!user) {
    return isSignUp ? (
      <SignUp onSignUp={handleSignUp} onSwitch={() => setIsSignUp(false)} />
    ) : (
      <SignIn onSignIn={handleSignIn} onSwitch={() => setIsSignUp(true)} />
    );
  }

  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
        initialParams={{ user, onSignOut: handleSignOut }}
      />    
    </Stack>
  );
};

export default RootLayout;
