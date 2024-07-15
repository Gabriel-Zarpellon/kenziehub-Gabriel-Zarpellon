import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function TechCard({ tech }) {
  let { deleteTech, setEditTech } = useContext(TechContext);
  return (
    <li>
      <div>
        <h3 className="title3">{tech.title}</h3>
        <div>
          <p className="paragraph">{tech.status}</p>
          <button onClick={() => setEditTech(tech)}>/</button>
          <button onClick={()=> deleteTech(tech.id)}>X</button>
        </div>
      </div>
    </li>
  );
}
