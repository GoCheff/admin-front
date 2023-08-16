import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { UserType } from "../../entities";

import { useLocalStorage } from "../../hooks";

import { getLocalStorageData, wait } from "../../utils";

const defaultContext = {
  user: (getLocalStorageData("user", "object") || null) as UserType,
  token: (getLocalStorageData("token", "string") || "") as string,

  getUser: async (): Promise<void> => {
    console.log("getUser");
  },
  login: (loginData: { token: string } | undefined): void => {
    console.log("login", loginData);
  },
  logout: (): void => {
    console.log("logout");
  },
};

const UserContext = createContext({ ...defaultContext });

interface UserProviderProps extends PropsWithChildren {}

function UserContextProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState(defaultContext.user);
  const [token, setToken] = useLocalStorage<string>(
    "token",
    defaultContext.token
  );

  async function getUser(): Promise<void> {
    await wait({ time: 3000 });

    if (!token) {
      setUser(null as unknown as UserType);
      return;
    }

    const { data } = {
      data: {
        user: {
          id: 1,
        },
      },
    };

    setUser(data.user);
  }

  function login(loginData: { token: string } | undefined): void {
    if (!loginData) return;

    setToken(loginData.token);
  }

  function logout(): void {
    setUser({} as UserType);
    setToken("");
  }

  const contextReturn = useMemo(
    () => ({
      user,
      token,
      getUser,
      login,
      logout,
    }),
    [user, token]
  );

  return (
    <UserContext.Provider value={contextReturn}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
