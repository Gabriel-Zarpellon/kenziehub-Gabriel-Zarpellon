import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/Logo.svg";
import { AddTechModal } from "../../components/TechList/AddTechModal";

export function DashboardPage() {
  let { user, userLogout } = useContext(UserContext);
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
          <h2>Tecnologias</h2>
          <button onClick={() => setIsAddTechOpen(true)}>+</button>
        </section>
        {isAddTechOpen ? (
          <AddTechModal setIsAddTechOpen={setIsAddTechOpen} />
        ) : null}
      </main>
    </>
  );
}
