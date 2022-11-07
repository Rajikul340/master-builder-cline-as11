import React from 'react';
import {createContext, useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/Firebase.config';


export const UserContext =createContext();
const auth=getAuth(app)

const AuthContex = ({children}) => {
    const [user, setUser] = useState('');

    const emailLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)

    }




const authInfo = {user, emailLogin}

    return (
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    );
};

export default AuthContex;