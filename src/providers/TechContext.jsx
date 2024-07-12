import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  let { user } = useContext(UserContext);
  let [techList, setTechList] = useState([]);
  let [editTech, setEditTech] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  console.log(techList);
  console.log(user?.techs);

  useEffect(() => {
    async function getTechs() {
      try {
        const {data} = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setTechList(data.techs)
      } catch (error) {
        console.log(error);
      }
    }
    getTechs();
  }, []);

  async function addTech(formData) {
    try {
      let { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setTechList([...techList, data]);

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
    } catch (error) {
      console.log(error);
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
