import { FormInput } from "../../components/FormInput";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function RegisterPage() {
    const {handleSubmit} = useForm();

    const {userRegister} = useContext(UserContext);

    async function submit(formData){
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
        />
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu e-mail"
        />
        <FormInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
        />
        {/* <FormInput
          name="password2"
          label="Confirmar Senha"
          type="password"
          placeholder="Digite novamente sua senha"
        /> */}
        <FormInput
          name="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
        />
        <FormInput
          name="contact"
          label="Contato"
          type="text"
          placeholder="Opção de contato"
        />
        <div>
            <label htmlFor="course_module" defaultValue={"m1"}>Selecionar Módulo</label>
          <select name="course_module">
            <option value="m1">
              Primeiro Módulo
            </option>
            <option value="m2">Segundo Módulo</option>
            <option value="m3">Terceiro Módulo</option>
            <option value="m4">Quarto Módulo</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}
