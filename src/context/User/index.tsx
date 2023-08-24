import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { services } from "../../services";

import { UserType } from "../../entities";

import { useLocalStorage } from "../../hooks";

import { getLocalStorageData } from "../../utils";

const defaultContext = {
  user: (getLocalStorageData("user", "object") || null) as UserType | null,
  token: (getLocalStorageData("token", "string") || "") as string,
  loadingUser: false,
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
  const [user, setUser] = useState<UserType | null>(defaultContext.user);
  const [token, setToken] = useLocalStorage<string>(
    "token",
    defaultContext.token
  );
  const [loadingUser, setLoadingUser] = useState(defaultContext.loadingUser);

  async function getUser(): Promise<void> {
    setLoadingUser(true);

    if (!token) {
      setUser(null);
      setLoadingUser(false);
      return;
    }

    const { data: user } = await services.admin.auth({ token });

    setUser(user);
    setLoadingUser(false);
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
      loadingUser,
      getUser,
      login,
      logout,
    }),
    [user, token, loadingUser]
  );

  return (
    <UserContext.Provider value={contextReturn}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
