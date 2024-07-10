import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";

export function LoginPage() {
  let{  handleSubmit } = useForm();

  return (
    <section>
      <form>
        <h2>Login</h2>
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <FormInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui conta?</p>
        <button>Cadastre-se</button>
      </div>
    </section>
  );
}
