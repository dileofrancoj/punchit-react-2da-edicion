import { useReducer } from "react";
import { SET_TASK } from "./actions/tasks";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasksReducer, initialState } from "./reducers/tasks";

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  // const { tasks } = state;
  const addTask = (task) => {
    dispatch({ type: SET_TASK, payload: task });
  };

  if (state.loading) return <h3>Cargando...</h3>;
  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} />
    </div>
  );
}

export default App;
