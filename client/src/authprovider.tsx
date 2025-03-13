import { ReactNode, useCallback, useEffect, useState } from "react";
import { getUser } from "./api";
import { AuthContext } from "./authcontext";

interface AuthProps {
  children: ReactNode;
}

/**
 * 
 * @param children a ReactNode 
 * @returns AuthProvider component which provides authentication context
 */
export function AuthProvider({ children }: AuthProps) {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  // create authentication checker to be used by all components
  const checkAuth = useCallback(async () => {
    const loggedIn: string | null = await getUser();
    if (loggedIn) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
