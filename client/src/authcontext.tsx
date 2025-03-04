import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser } from "./api";

export const AuthContext = createContext<{
  isLoggedIn: boolean;
  checkAuth: () => void;
} | undefined>(undefined);



interface AuthProps {
  children: ReactNode;
}

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
  },[]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Saftey function that checks that every components that tries to use the context values is wrapped in an AuthProvider
 * @returns context
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}