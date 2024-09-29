import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { View } from 'react-native';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { signIn, signUp } from './auth/MockAuth';
import { UserDataProvider, useUserData } from '../utils/UserDataContext';
import { populateUserData } from '../utils/dataManager';
//import Tabs from './tabs/Tabs';

//import { Profile, Bet, FriendGroup, populateProfile, populateBet, populateFriendGroup } from '../components/Classes.js';

SplashScreen.preventAutoHideAsync();

const RootLayout = ({ loggedInUsername }) => {
  const [fontsLoaded] = useFonts({
    // Add your custom fonts here if needed
  });


  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const { loadUserData } = useUserData();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (user) {
      loadUserData(user.id);
    }
  }, [user]);

  const handleSignIn = ({ email, password }) => {
    const result = signIn(email, password);
    if (result.success) {
      setUser(result.user);

      // Populate user data
      const userData = populateUserData(result.user.id);
      
      // Store the populated data in the context
      loadUserData(userData);
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

const WrappedRootLayout = () => (
  <UserDataProvider>
    <RootLayout />
  </UserDataProvider>
);

export default WrappedRootLayout;