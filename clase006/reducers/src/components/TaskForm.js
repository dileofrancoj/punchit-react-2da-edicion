import shortid from "shortid";
import { useForm } from "react-hook-form";
const TaskList = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTask = (object) => {
    addTask({ ...object, id: shortid.generate() });
  };

  return (
    <>
      <h3>Formulario de tareas</h3>
      <form onSubmit={handleSubmit(createTask)}>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors?.name && <span>El campo es obligatorio</span>}
        </div>
        <br />
        <div>
          <textarea
            rows={5}
            cols={5}
            placeholder="Descripción"
            // yup resolvers
            {...register("description", { required: true })}
          />
          {errors?.description && <span>El campo es obligatorio</span>}
        </div>
        <button type="submit">Agregar tarea</button>
      </form>
    </>
  );
};

export default TaskList;
