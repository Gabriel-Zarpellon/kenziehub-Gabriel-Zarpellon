import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss"

export function TechList() {
  let { techList } = useContext(TechContext);
  
  return(
    <ul className={`dashboardContainer ${styles.techList}`}>
        {techList.map(tech => <TechCard key={tech.title} tech={tech}/>)}
    </ul>
    
  )
}
