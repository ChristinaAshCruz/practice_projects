// pass in any props within the first ()

const Tasks = ({ tasks }) => {
  // use setTasks to update an object

  return (
    <>
      {/* for each task, we want to output an h3 with the task's text inside */}
      {/* each child should have a key prop */}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
