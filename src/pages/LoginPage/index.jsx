import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function LoginPage() {
  let { register, handleSubmit } = useForm();
  let { userLogin } = useContext(UserContext);

  async function submit(formData) {
    userLogin(formData);
  }

  return (
    <section>
      <div>
        <img src={Logo} alt="KenzieHub Logo" />
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          register={register}
        />
        <FormInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          register={register}
        />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </section>
  );
}
