const TaskList = ({ tasks }) => {
  return (
    <>
      <h2>Tareas</h2>
      {tasks?.length > 0 ? (
        tasks.map((task) => <h4 key={task.id}>{task.name}</h4>)
      ) : (
        <h3>No hay tareas para mostrar</h3>
      )}
    </>
  );
};

export default TaskList;
