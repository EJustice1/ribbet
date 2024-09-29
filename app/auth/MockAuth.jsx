import React from 'react';

const mockUsers = [
  { email: 'user1@example.com', password: 'password1', name: 'User One' },
  { email: 'user2@example.com', password: 'password2', name: 'User Two' },
];

export const signIn = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    return { success: true, user: { email: user.email, name: user.name } };
  }
  return { success: false, message: 'Invalid email or password' };
};

export const signUp = (name, email, password) => {
  if (mockUsers.some(u => u.email === email)) {
    return { success: false, message: 'Email already in use' };
  }
  const newUser = { name, email, password };
  mockUsers.push(newUser);
  return { success: true, user: { email: newUser.email, name: newUser.name } };
};

const MockAuth = () => {
  // This component doesn't render anything, it's just a container for the mock auth functions
  return null;
};

export default MockAuth;