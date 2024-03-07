"use client"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "@/firebase/firebase.console";
export const MyContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false)
    // hide and showing account options
    const [isShow, setIsShow] = useState(false);
    const auth = getAuth(app);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return unSubscribe;
    }, [auth])
    const contextInfo = {
        user,
        signUp,
        signIn,
        loading,
        isShow,
        setIsShow,
        logOut
    }

    return (
        <MyContext.Provider value={contextInfo}>
            {children}
        </MyContext.Provider>
    );
};

export default AuthContextProvider;