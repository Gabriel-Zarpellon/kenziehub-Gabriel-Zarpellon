import styles from "./style.module.scss";

export function FormInput({ name, label, type, placeholder, register }) {
  return (
    <div className={styles.inputBox}>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input className="input"
        type={type}
        placeholder={placeholder}
        {...register(`${name}`)}
        required
      />
    </div>
  );
}
