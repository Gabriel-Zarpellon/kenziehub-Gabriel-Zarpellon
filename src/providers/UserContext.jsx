import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserContext = createContext({});

export function UserProvider({ children }) {
  let [user, setUser] = useState(null);

  const navigate = useNavigate();

  let userId = localStorage.getItem("@USERID");

  useEffect(() => {
    async function loadUser() {
      let { data } = await api.get(`/users/${userId}`);
      setUser(data);
    }
  }, []);

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
      toast.success("Cadastro efetuado com sucesso!");
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
      toast.error("Falha na autenticação!");
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
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </UserContext.Provider>
  );
}
