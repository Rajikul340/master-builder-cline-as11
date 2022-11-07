import React from 'react';
import {createContext} from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import app from '../../firebase/Firebase.config';


export const UserContext =createContext();
const auth=getAuth(app)

const AuthContext = ({children}) => {


const authInfo = {}

    return (
      <UserContext.provider value={authInfo}>
        {children}
      </UserContext.provider>
    );
};

export default AuthContext;