import { FormInput } from "../../components/FormInput";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const { userRegister } = useContext(UserContext);

  async function submit(formData) {
    userRegister(formData);
  }
  return (
    <section>
      <div>
        <img src={Logo} alt="KenzieHub Logo" />
        <Link to="/">Voltar</Link>
      </div>
      <div>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          name="name"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register}
        />
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu e-mail"
          register={register}
        />
        <FormInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register}
        />
        {/* <FormInput
          name="password2"
          label="Confirmar Senha"
          type="password"
          placeholder="Digite novamente sua senha"
          register={register}
        /> */}
        <FormInput
          name="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register}
        />
        <FormInput
          name="contact"
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          register={register}
        />
        <div>
          <label htmlFor="course_module" >
            Selecionar Módulo
          </label>
          <select name="course_module" defaultValue={"Primeiro módulo (Introdução ao Frontend)"} {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}
