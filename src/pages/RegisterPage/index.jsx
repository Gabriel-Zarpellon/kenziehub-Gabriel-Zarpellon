import { FormInput } from "../../components/FormInput";

export function RegisterPage() {
  return (
    <section>
      <div>
        <h2></h2>
        <p></p>
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
          <select name="module">
            <option value="1" selected>
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
