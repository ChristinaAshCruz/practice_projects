import Task from "./Task";
// pass in any props within the first ()

const Tasks = ({ tasks, onDelete, onToggle }) => {
  // use setTasks to update an object

  return (
    <>
      {/* creating a for each loop that goes through each task and passes the key and task as props to our Task.js */}
      {tasks.map((task) => (
        // onDelete event called the onDelete function
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
