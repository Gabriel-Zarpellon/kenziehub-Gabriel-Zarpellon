import { FormInput } from "../../components/FormInput";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

export function RegisterPage() {
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
      <form>
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
          name="password1"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
        />
        <FormInput
          name="password2"
          label="Confirmar Senha"
          type="password"
          placeholder="Digite novamente sua senha"
        />
        <FormInput
          name="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
        />
        <FormInput
          name="contact"
          label="Contato"
          type="tel"
          placeholder="Fale sobre você"
        />
        <div>
            <label htmlFor="module" defaultValue={"1"}>Selecionar Módulo</label>
          <select name="module">
            <option value="1">
              Primeiro Módulo
            </option>
            <option value="2">Segundo Módulo</option>
            <option value="3">Terceiro Módulo</option>
            <option value="4">Quarto Módulo</option>
          </select>
        </div>
      </form>
    </section>
  );
}
