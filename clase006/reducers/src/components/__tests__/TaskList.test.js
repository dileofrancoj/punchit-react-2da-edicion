import { render } from "@testing-library/react";
import TaskList from "../TaskList";

describe("TaskList", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      tasks: [
        {
          id: 1,
          name: "Tarea 1",
          description: "Descripcion mock",
          done: false,
        },
      ],
    };
  });
  test("Should render basic component", () => {
    const { getAllByText } = render(<TaskList tasks={defaultProps.tasks} />);
    getAllByText(/tareas/i);
  });
  test("Should render Task List information", () => {
    const { getByText } = render(<TaskList tasks={defaultProps.tasks} />);
    getByText(/tarea 1/i);
  });
  test("Should render empty component", () => {
    defaultProps.tasks = [];
    const { getByText } = render(<TaskList tasks={defaultProps.tasks} />);
    getByText(/no hay tareas para mostrar/i);
  });

  test("Shoul render two tasks", () => {
    defaultProps.tasks.push({
      id: 2,
      name: "comprar pan",
      description: "descripcion",
    });

    const { getByText } = render(<TaskList tasks={defaultProps.tasks} />);

    expect(defaultProps.tasks.length).toBe(2);
    getByText(/tarea 1/i);
    getByText(/comprar pan/i);
  });
});
