import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/Logo.svg"

export function DashboardPage() {
  let { user, userLogout } = useContext(UserContext);
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
      </main>
    </>
  );
}
