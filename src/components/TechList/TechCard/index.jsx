import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";
import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";

export function TechCard({ tech }) {
  let { deleteTech, setEditTech } = useContext(TechContext);
  return (
    <li className={styles.cardBox}>
      <h3 className="title3">{tech.title}</h3>
      <div>
        <p className="paragraph">{tech.status}</p>
        <div className={styles.buttonBox}>
          <button onClick={() => setEditTech(tech)}><ImPencil size={16}/></button>
          <button onClick={() => deleteTech(tech.id)}><FaRegTrashAlt size={16}/></button>
        </div>
      </div>
    </li>
  );
}
