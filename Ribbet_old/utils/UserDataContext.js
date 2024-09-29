// utils/UserDataContext.js

import React, { createContext, useState, useContext } from 'react';
import { populateUserData } from './dataManager';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const loadUserData = (userId) => {
    const data = populateUserData(userId);
    setUserData(data);
  };

  return (
    <UserDataContext.Provider value={{ userData, loadUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (context === undefined) {
      throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
  };