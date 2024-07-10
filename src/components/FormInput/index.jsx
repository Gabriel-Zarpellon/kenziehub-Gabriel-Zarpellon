import { useForm } from "react-hook-form"

export function FormInput({name, label, type, placeholder}){
    let { register } = useForm();
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder}  {...register(`${name}`)} required/>
        </div>
    )
}