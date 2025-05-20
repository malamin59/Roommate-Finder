import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] =  useState(true)

    // const [loading, setLoading] = useState(true);
    console.log(loading , user)

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
       return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false)
            })
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        createUser,
        signinUser,
        logOut, 
        provider,
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;