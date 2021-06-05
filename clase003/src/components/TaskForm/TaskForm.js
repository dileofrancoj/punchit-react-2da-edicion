import PropTypes from "prop-types";
import shortid from "short-id";

import { Form, Button } from "react-bootstrap";
const TaskForm = ({ addTask }) => {
  const handleAddTask = (e) => {
    e.preventDefault();

    const [taskName, taskDescription] = e.target.elements;
    addTask({
      id: shortid.generate(),
      name: taskName.value.trim(),
      description: taskDescription.value.trim(),
    });
    e.target.reset();
  };
  return (
    <Form onSubmit={handleAddTask}>
      <Form.Group>
        <Form.Label>Nombre de la tarea</Form.Label>
        <Form.Control type="text" name="taskName" placeholder="nombre tarea" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descripcion de la tarea</Form.Label>
        <Form.Control as="textarea" name="taskDescription" rows={3} />
      </Form.Group>

      <Button type="submit">Guardar tarea</Button>
    </Form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
