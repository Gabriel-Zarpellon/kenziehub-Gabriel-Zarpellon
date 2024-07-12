import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function TechCard({ tech }) {
  let { deleteTech } = useContext(TechContext);
  return (
    <li>
      <div>
        <h3>{tech.title}</h3>
        <div>
          <p>{tech.status}</p>
          <button>/</button>
          <button onClick={()=> deleteTech(tech.id)}>X</button>
        </div>
      </div>
    </li>
  );
}
