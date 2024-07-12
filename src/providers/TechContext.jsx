import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  let { user } = useContext(UserContext);
  let [techList, setTechList] = useState(user ? user.techs : []);

  const token = localStorage.getItem("@TOKEN");

  console.log(techList);

  // useEffect(() => {
  //   async function getTechs() {
  //     try {
  //       const { data } = await api.get("/users/techs", {headers: {
  //         Authorization: `Bearer ${token}`,
  //       },});
  //       setTechList(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getTechs();
  // }, []);

  async function addTech(formData) {
    try {
      let { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList(user.techs);

      alert("tecnologia adicionada!");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech(deleteId) {
    try {
      await api.delete(`/users/techs/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let newTechList = techList.filter((tech) => tech.id != deleteId);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
    alert("Tecnologia excluída!");
  }

  

  return (
    <TechContext.Provider value={{ techList, addTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
}
