import {
  createContext,
  useContext,
} from "react";

export const AuthContext = createContext<{
  isLoggedIn: boolean;
  checkAuth: () => void;
} | undefined>(undefined);

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