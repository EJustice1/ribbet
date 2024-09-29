import { mockUsers } from './mockData';

export const signIn = (email, password) => {
  console.log('MockAuth: Attempting sign in with:', email);
  
  // In a real app, you'd hash the password before comparing
  const user = mockUsers.find(u => u.email === email);
  
  if (user) {
    console.log('MockAuth: User found:', user);
    // For mock purposes, we're not checking the password
    return { success: true, user: { id: user.id, email: user.email } };
  } else {
    console.log('MockAuth: User not found');
    return { success: false, message: 'Invalid email or password' };
  }
};