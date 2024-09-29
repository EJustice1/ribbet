import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUp = ({ onSignUp, onSwitch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Here you would typically call an API to register the user
    // For now, we'll just call the onSignUp prop
    onSignUp({ name, email, password });
  };

  return (
    <View style={styles.container}>
      {/* Static Welcome Image */}
      <Image source={require("./assets/frog_default.png")} style={styles.welcomeImage} resizeMode="cover" />
      
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to Ribbet</Text>

      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#fff" // Change placeholder text color
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#fff" // Change placeholder text color
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#fff" // Change placeholder text color
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton} onPress={onSwitch}>
        <Text style={styles.switchButtonText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A5C7D7',
  },
  welcomeImage: {
    width: 100,
    height: 100,
    marginBottom: 20, // Increased spacing
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 30, // Increased spacing
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20, // Increased spacing
    paddingHorizontal: 10,
    borderRadius: 10, // Rounded edges
    color: '#fff', // Change input text color
  },
  button: {
    backgroundColor: '#A5E490',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20, // Increased spacing
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  switchButton: {
    marginTop: 10,
  },
  switchButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default SignUp;