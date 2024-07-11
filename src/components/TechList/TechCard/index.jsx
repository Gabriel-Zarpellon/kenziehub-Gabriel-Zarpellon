export function TechCard({ tech }) {
  return (
    <li>
      <div>
        <h3>{tech.title}</h3>
        <div>
          <p>{tech.status}</p>
          <button>/</button>
          <button>X</button>
        </div>
      </div>
    </li>
  );
}
