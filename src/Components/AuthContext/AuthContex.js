import React from 'react';
import {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/Firebase.config';
import {useEffect} from 'react';


export const UserContext =createContext();
const auth=getAuth(app)

const AuthContex = ({children}) => {
    const [user, setUser] = useState('');

    const emailLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)

    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }

    },[])


const authInfo = {user, emailLogin,createUser,logOut}

    return (
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    );
};

export default AuthContex;