import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { UserContext } from "../../providers/UserContext";

export function TechList() {
  let { techList } = useContext(TechContext);
  let { user } = useContext(UserContext);
  return(
    <ul>
        {techList.map(tech => <TechCard key={tech.title} tech={tech}/>)}
    </ul>
    
  )
}
