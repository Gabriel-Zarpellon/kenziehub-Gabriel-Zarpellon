import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext";

export function TechList() {
  let { userTechs } = useContext(UserContext);
  
  return(
    <ul className={`dashboardContainer ${styles.techList}`}>
        {userTechs.map(tech => <TechCard key={tech.title} tech={tech}/>)}
    </ul>
    
  )
}
