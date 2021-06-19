import { SET_TASK, DELETE_TASK, UPDATE_TASK, GET_TASK } from "../actions/tasks";

// Redux ( usa context) y Context (store global)
// Traducciones , Dark Mode, Usuarios

export const initialState = {
  tasks: [],
  selectedTask: {},
  loading: false,
  owner: { id: 1, name: "Franco Di Leo", mail: "dileo.francoj@gmail.com" },
};
/*

    action : {
        type : string,
        payload : {}
    }

*/

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        loading: true,
        tasks: [action.payload, ...state.tasks],
      };

    case GET_TASK: {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      return {
        ...state,
        selectedTask,
      };
    }
    case DELETE_TASK: {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
};
