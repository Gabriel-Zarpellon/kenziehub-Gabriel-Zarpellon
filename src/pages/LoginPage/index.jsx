import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";

export function LoginPage() {
  let { register, handleSubmit } = useForm();
  let { userLogin } = useContext(UserContext);

  async function submit(formData) {
    userLogin(formData);
  }

  return (
    <section className={styles.loginSection}>
      <div className="container">
        <div className={styles.logoBox}>
          <img src={Logo} alt="KenzieHub Logo" />
        </div>
        <div className={styles.formBox}>
          <form onSubmit={handleSubmit(submit)}>
            <div className={styles.titleBox}>
              <h1 className="title1">Login</h1>
            </div>
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
            <button type="submit" className="button pink">Entrar</button>
          </form>
          <div className={styles.loginBottom}>
            <p className="paragraph">Ainda não possui uma conta?</p>
            <Link to="/register">
              <button className="button">Cadastre-se</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
