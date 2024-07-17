import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  let { userTechs, setUserTechs } = useContext(UserContext);
  let [editTech, setEditTech] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  async function addTech(formData) {
    try {
      let { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs([...userTechs, data]);
      toast.success("Tecnologia adicionada!");
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
      let newTechList = userTechs.filter((tech) => tech.id != deleteId);
      setUserTechs(newTechList);
    } catch (error) {
      console.log(error);
    }
    toast.success("Tecnologia excluída!");
  }

  async function updateTech(formData) {
    try {
      let { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let newTechList = userTechs.map((tech) => {
        if (tech.id == editTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setUserTechs(newTechList);
      setEditTech(null);
      toast.success("Tecnologia atualizada!");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao atualizar tecnologia!");
    }
  }

  return (
    <TechContext.Provider
      value={{
        addTech,
        deleteTech,
        editTech,
        setEditTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
