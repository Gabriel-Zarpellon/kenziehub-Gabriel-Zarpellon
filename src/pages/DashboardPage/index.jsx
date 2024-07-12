import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/Logo.svg";
import { AddTechModal } from "../../components/TechList/AddTechModal";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "../../components/TechList";
import { EditTechModal } from "../../components/TechList/EditTechModal";

export function DashboardPage() {
  let { user, userLogout } = useContext(UserContext);
  let { techList, editTech } = useContext(TechContext);
  let [isAddTechOpen, setIsAddTechOpen] = useState(false);
 

  return (
    <>
      <header>
        <img src={Logo} alt="KenzieHub Logo" />
        <button onClick={() => userLogout()}>Sair</button>
      </header>
      <main>
        <section>
          <h2>{user.name}</h2>
          <p>{user.course_module}</p>
        </section>
        <section>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setIsAddTechOpen(true)}>+</button>
            {techList.length > 0 ? <TechList /> : null}
          </div>
        </section>
        {isAddTechOpen ? (
          <AddTechModal setIsAddTechOpen={setIsAddTechOpen} />
        ) : null}
        {editTech ? (
          <EditTechModal />
        ) : null}
      </main>
    </>
  );
}
