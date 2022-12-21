import React, { createContext, ReactNode, useContext, useState } from "react";

export type UserData = { name: string; userSettings: Record<string, string> };

const userDataMock = {
  name: "Marek Całus",
  userSettings: { localization: "pl-PL" },
};

type UserContext = {
  user: UserData | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export const UserContext = createContext<UserContext>(null);

type Props = {
  children?: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    // if backend login was successful set user data, else set null and reject promise
    setUser(userDataMock);
  };

  const logout = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    // send request to the backend for it to clear http only cookie with session token, if successful set user to null
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      <div>User data: {JSON.stringify(user, null, 2)}</div>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
