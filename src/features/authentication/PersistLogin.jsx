import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userRefreshToken from "../../hooks/useRefreshToken";
import SpinnerFullPage from "../../ui/SpinnerFullPage";

export default function PersistLogin() {
  const refresh = userRefreshToken();
  const { auth, loading, setLoading } = useAuth();
  // console.log(auth);
  // console.log(`Persist Auth is: ${auth?.email}`);

  const verifyRefreshToken = async () => {
    try {
      await refresh();
      if (auth?.name) setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    !auth?.token ? verifyRefreshToken() : setLoading(false);
  }, []);

  return <section>{loading ? <SpinnerFullPage /> : <Outlet />}</section>;
}
