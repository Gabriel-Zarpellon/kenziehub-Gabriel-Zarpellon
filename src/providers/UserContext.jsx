import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  let [user, setUser] = useState(null);

  const navigate = useNavigate();

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
      alert("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(formData) {
    try {
      let { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}
