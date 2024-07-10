import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  let [user, setUser] = useState(null);
  let [userList, setUserList] = useState([]);

  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/users");
        setUserList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
      alert("Cadastro efetuado com sucesso!");
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
    <UserContext.Provider value={{ user, userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  );
}
