import { createContext, useContext, useEffect, useState } from "react";
import { login as loginApi } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    const storedSession = sessionStorage.getItem("inventario_session");

    if (!storedSession) {
      return null;
    }

    try {
      return JSON.parse(storedSession);
    } catch {
      sessionStorage.removeItem("inventario_session");
      return null;
    }
  });

  useEffect(() => {
    if (session) {
      sessionStorage.setItem(
        "inventario_session",
        JSON.stringify(session)
      );
    } else {
      sessionStorage.removeItem("inventario_session");
    }
  }, [session]);

  async function iniciarSesion(nom_login, password) {
    const data = await loginApi(nom_login, password);

    setSession(data);

    return data;
  }

  function cerrarSesion() {
    setSession(null);
    sessionStorage.removeItem("inventario_session");
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        iniciarSesion,
        cerrarSesion,
        isAuthenticated: !!session
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "useAuth debe utilizarse dentro de un AuthProvider"
    );
  }

  return context;
}