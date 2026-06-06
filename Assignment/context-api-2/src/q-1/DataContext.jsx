import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({children}) {

    let [isLogin, setIsLogin] = useState(false)

    let handleLogin = () => {
        setIsLogin((prev) => prev = true)

    }

    let handleLogout = () => {
        setIsLogin((prev) => prev = false)

    }

     return (
    <AuthContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );

}

