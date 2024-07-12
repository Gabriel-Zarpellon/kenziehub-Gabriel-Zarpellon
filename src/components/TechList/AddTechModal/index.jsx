import { useForm } from "react-hook-form";
import { Modal } from "../../Modal";
import { FormInput } from "../../FormInput";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function AddTechModal({ setIsAddTechOpen }) {
  let { register, handleSubmit } = useForm();
  let { addTech } = useContext(TechContext);

  async function submit(formData) {
    addTech(formData);
    setIsAddTechOpen(false);
  }
  return (
    <Modal title="Cadastrar Tecnologia" setIsOpen={setIsAddTechOpen} value={false}>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          name="title"
          label="Nome"
          type="text"
          placeholder="Tecnologia"
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
