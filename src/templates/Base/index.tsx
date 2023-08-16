import { useContext, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { UserContext } from "../../context";

import { LoadingVariants as Loading } from "../../ui/components";

function BaseTemplate(): JSX.Element {
  const { token, getUser, logout } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCheckingToken, setIsCheckingToken] = useState<boolean>(false);

  useEffect(() => {
    checkToken();
  }, [token]);

  async function checkToken(): Promise<void> {
    if (isCheckingToken) return;

    setIsCheckingToken(true);
    setLoading(true);

    try {
      await getUser();
    } catch (error) {
      logout();
    } finally {
      setIsCheckingToken(false);
      setLoading(false);
    }
  }

  if (loading) return <Loading.Screen />;

  return <Outlet />;
}

export { BaseTemplate };
