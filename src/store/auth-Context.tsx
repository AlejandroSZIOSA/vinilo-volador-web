import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  is_Authenticated: boolean | string;
  login_Fn: (token: string) => void;
  logout_Fn: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider_Ctx = ({ children }: { children: ReactNode }) => {
  const [is_Authenticated, setAuthenticated] = useState<string | boolean>(
    false
  );

  const login_Fn = (t: string) => setAuthenticated(t); //will load the real token in the future
  const logout_Fn = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ is_Authenticated, login_Fn, logout_Fn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth_Ctx = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
