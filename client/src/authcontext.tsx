import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getUser } from './api';


const AuthContext = createContext<{ isLoggedIn: boolean; checkAuth: () => void }>({
    isLoggedIn: false,
    checkAuth: () => {},
  });;

interface AuthProps {
  children: ReactNode;
}

export function AuthProvideer({ children }: AuthProps) {
    const [isLoggedIn, setLoggedIn] = useState<Boolean>(false);
    const authContext = useContext(AuthContext);

    authContext.checkAuth = async () => {
        const loggedIn : string | null = await getUser();
        if(loggedIn){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    }

    useEffect(authContext.checkAuth){
    }
}
