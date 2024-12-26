"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

// import { getCurrentUser } from "../services/AuthService";
import { getCurrentUser } from "../services/AuthService";
import { IUser, TQueryParams } from "../types";
// import { IUser, TQueryParams } from "../types";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setParams: Dispatch<SetStateAction<TQueryParams[] | []>>;
  params: TQueryParams[] | [];
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useState<TQueryParams[] | []>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user as any);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, setParams, params }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
