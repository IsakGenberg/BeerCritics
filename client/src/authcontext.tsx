import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser } from "./api";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  checkAuth: () => void;
} | null>(null);

interface AuthProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProps) {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const checkAuth = async () => {
    const loggedIn: string | null = await getUser();
    if (loggedIn) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}