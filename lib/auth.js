"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const ADMIN_EMAIL = 'devcapsule@gmail.com';

// Create auth context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage
    const savedUser = localStorage.getItem('pixelPulseUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // const login = (email, password) => {
  //   // In a real app, this would be an API call
  //   return new Promise((resolve, reject) => {
  //     // Simulate API call
  //     setTimeout(() => {
  //       // For demo purposes, we're only checking the email
  //       if (email === ADMIN_EMAIL) {
  //         const user = {
  //           email,
  //           isAdmin: true,
  //           name: 'Admin User',
  //         };
  //         setUser(user);
  //         localStorage.setItem('pixelPulseUser', JSON.stringify(user));
  //         resolve(user);
  //       } else {
  //         reject(new Error('Invalid credentials'));
  //       }
  //     }, 1000);
  //   });
  // };
  
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === ADMIN_EMAIL && password === '12345678') {
          const user = {
            email,
            isAdmin: true,
            name: 'Admin User',
          };
          setUser(user);
          localStorage.setItem('pixelPulseUser', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pixelPulseUser');
  };

  // Check if the current user is an admin
  const isAdmin = () => {
    return user && user.isAdmin && user.email === ADMIN_EMAIL;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};