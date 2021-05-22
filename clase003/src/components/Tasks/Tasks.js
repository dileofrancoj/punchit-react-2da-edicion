import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td onClick={() => deleteTask(task.id)}>X</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Tasks;
