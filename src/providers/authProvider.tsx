import { User } from "@/models/user";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

interface props {
  children: ReactNode;
}

export const AuthProvider: FC<props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("AAAAA");
  }

  return context;
};
