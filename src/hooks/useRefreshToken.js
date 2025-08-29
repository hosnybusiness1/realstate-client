import axios from "axios";
import BASE_URL from "../utils/baseUrl";
import useAuth from "./useAuth";

const userRefreshToken = () => {
  const { setAuth, setLoading } = useAuth();

  function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let cookie of cookieArr) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  }

  const refresh = async () => {
    const response = await axios.get(`${BASE_URL}/users/userRefresh`, {
      credintioals: true,
      withCredentials: true,
      withXSRFToken: true,
    });

    if (response?.data?.data) {
      const result = response.data.data;
      const { name, email, role, avatar } = result;

      if (response.status === 200) setAuth({ name, email, role, avatar });

      setLoading(false);
      return { name, email, role, avatar };
    }
  };
  return refresh;
};

export default userRefreshToken;
