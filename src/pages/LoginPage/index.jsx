import { useForm } from "react-hook-form";

export function LoginPage() {

    const {register, handleSubmit} = useForm();

  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" {...register("email")}/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" {...register("password")}/>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui conta?</p>
        <button>Cadastre-se</button>
      </div>
    </section>
  );
}
