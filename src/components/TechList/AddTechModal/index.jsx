import { useForm } from "react-hook-form";
import { Modal } from "../../Modal";
import { FormInput } from "../../FormInput";

export function AddTechModal({ setIsAddTechOpen, children }) {
  let { register, handleSubmit } = useForm();
  async function submit(formData) {}
  return (
    <Modal title="Cadastrar Tecnologia" setIsOpen={setIsAddTechOpen}>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          name="title"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register}
        />
        <div>
          <label htmlFor="status">Selecionar Status</label>
          <select
            name="status"
            defaultValue={"Iniciante"}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </Modal>
  );
}
