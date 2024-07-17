import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserContext = createContext({});

export function UserProvider({ children }) {
  let [user, setUser] = useState(null);
  let [userTechs, setUserTechs] = useState([]);

  const navigate = useNavigate();

  let userId = localStorage.getItem("@USERID");
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function loadUser() {
      let { data } = await api.get(`/users/${userId}`);
      setUser(data);
    }
  }, []);

  useEffect(() => {
    async function getTechs() {
      if (token) {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserTechs(data.techs);
      } else {
        setUserTechs([]);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    }
    getTechs();
  }, [user]);

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
      toast.success("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status == 400) {
        toast.error("A senha deve conter no mínimo 6 caracteres!");
      } else {
        toast.error("E-mail já cadastrado!");
      }
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
      toast.error("E-mail ou senha incorretos!");
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout, userTechs, setUserTechs }}>
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
