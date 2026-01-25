// token helpers using sessionStorage
import api from "../api/api";

// fetchWithRefresh (same logic as before) — uses sessionStorage for refresh token
const getRefreshToken = async (): Promise<string> => {
  const storedRaw = localStorage.getItem("token");
  if (!storedRaw) throw new Error("No token stored");

  const stored = JSON.parse(storedRaw);
  const refresh =
    stored?.token?.refresh ?? stored?.refresh ?? stored?.refresh_token;
  console.log("refresh", refresh);

  if (!refresh) {
    throw new Error("No refresh token");
  }

  // axios: send payload as the second argument
  let refreshRes;
  try {
    // Django routes expose the token refresh at /account/token/refresh
    // Accept both with/without trailing slash by trying the canonical path.
    refreshRes = await api.post("/account/token/refresh", { refresh });
  } catch (err) {
    console.error("refresh call failed:", err);
    throw err;
  }

  console.log("refreshResStatus", refreshRes.status, refreshRes.statusText);

  if (refreshRes.status === 401) {
    throw new Error("Session expired");
  }

  const data = refreshRes.data;
  console.log("data", data);

  localStorage.setItem("token", JSON.stringify(data));

  return data.access as string;
};

export default getRefreshToken;
