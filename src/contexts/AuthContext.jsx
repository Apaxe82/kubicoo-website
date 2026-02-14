'use client';

// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get user token and fetch subscription
        const token = await firebaseUser.getIdToken();
        
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/users/subscription`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setSubscription(res.data.subscription);
        } catch (error) {
          console.error('Error fetching subscription:', error);
        }

        setUser(firebaseUser);
      } else {
        setUser(null);
        setSubscription(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, displayName, role = 'client') => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile
    await updateProfile(userCredential.user, { displayName });

    // Create user in backend
    const token = await userCredential.user.getIdToken();
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/create`,
      { email, displayName, role },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return userCredential.user;
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const refreshSubscription = async () => {
    if (user) {
      const token = await user.getIdToken();
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/subscription`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSubscription(res.data.subscription);
    }
  };

  const value = {
    user,
    subscription,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    refreshSubscription,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
