import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // creating our useState for our 'Add' button
  // prepping it to be able to toggle the form
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    // create a new task using the new id plus the object that is being passed
    const newTask = { id, ...task };
    // now, we are setting our tasks with the current tasks that are there, along with the new task that is added
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    // for our .filter() function, we are filtering through each task and checking whether the task.id equates to the argument id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    // set reminder to opposite value (true to false + false to true)
    setTasks(
      // using .map(), we are looping through each task and checking whether the task.id matches our id argument
      // then, we use a ternary operator
      // if it results in true, we are setting that task's reminder to the false value of it's current reminder
      // if false, we are keeping that task the same with no changes
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      {/* giving our header tag an onAdd prop that when toggled, it will set the showAddTask to the opposite value */}
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        // toggle for our add/close button to the form
        showAdd={showAddTask}
      />
      {/* if our 'showAddTask' is true, show AddTask element */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* implementing a ternary operator that inputs code options for when we have tasks and when we have no tasks*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
