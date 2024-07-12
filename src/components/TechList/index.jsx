import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";

export function TechList() {
  let { techList } = useContext(TechContext);
  
  return(
    <ul>
        {techList.map(tech => <TechCard key={tech.title} tech={tech}/>)}
    </ul>
    
  )
}
