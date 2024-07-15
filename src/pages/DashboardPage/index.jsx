import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/Logo.svg";
import { AddTechModal } from "../../components/TechList/AddTechModal";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "../../components/TechList";
import { EditTechModal } from "../../components/TechList/EditTechModal";
import { IoMdAdd } from "react-icons/io";
import styles from "./style.module.scss";

export function DashboardPage() {
  let { user, userLogout } = useContext(UserContext);
  let { techList, editTech } = useContext(TechContext);
  let [isAddTechOpen, setIsAddTechOpen] = useState(false);

  return (
    <>
      <header>
        <div className={`dashboardContainer ${styles.logoBox}`}>
          <img src={Logo} alt="KenzieHub Logo" />
          <button onClick={() => userLogout()}>Sair</button>
        </div>
      </header>
      <main>
        <section className={styles.titleSection}>
          <div className={`dashboardContainer ${styles.titleBox}`}>
            <h1 className="title1">{user.name}</h1>
            <p className="paragraph">{user.course_module}</p>
          </div>
        </section>
        <section>
          <div className="dashboardContainer">
            <div className={styles.techTitle}>
              <h2 className="title2">Tecnologias</h2>
              <button onClick={() => setIsAddTechOpen(true)}>
                <IoMdAdd size={20} />
              </button>
            </div>
            <div className={styles.techListBox}>
              {techList.length > 0 ? <TechList /> : null}
            </div>
          </div>
        </section>
        {isAddTechOpen ? (
          <AddTechModal setIsAddTechOpen={setIsAddTechOpen} />
        ) : null}
        {editTech ? <EditTechModal /> : null}
      </main>
    </>
  );
}
