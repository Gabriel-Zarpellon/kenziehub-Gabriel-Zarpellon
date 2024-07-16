import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  let { user } = useContext(UserContext);
  let [techList, setTechList] = useState([]);
  let [editTech, setEditTech] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function getTechs() {
      if (token) {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTechList(data.techs);
      } else {
        setTechList([]);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    }
    getTechs();
  }, [user]);

  async function addTech(formData) {
    try {
      let { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
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
      let newTechList = techList.filter((tech) => tech.id != deleteId);
      setTechList(newTechList);
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
      let newTechList = techList.map((tech) => {
        if (tech.id == editTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
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
        techList,
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
