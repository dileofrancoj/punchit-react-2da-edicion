import { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Work = () => {
  // [{id : string, title : string, description : string}]
  const [tasks, setTasks] = useState([]);

  const createTask = (e) => {
    // e -> referencia del formulario que disparo el evento
    e.preventDefault();
    let [title, description] = e.target.elements;
    title = title.value.trim();
    description = description.value.trim();
    setTasks([{ id: 1, title, description }]);
  };

  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <h3>Tasks</h3>
          <Form onSubmit={createTask}>
            <Form.Group>
              <Form.Label>Titulo de la tarea</Form.Label>
              <Form.Control placeholder="Tarea" name="title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripcion de la tarea</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                placeholder="Descripcion de la tarea"
              />
            </Form.Group>
            <Button type="submit">Crear tarea</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
