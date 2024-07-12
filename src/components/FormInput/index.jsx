export function FormInput({ name, label, type, placeholder, register }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(`${name}`)}
        required
      />
    </div>
  );
}
