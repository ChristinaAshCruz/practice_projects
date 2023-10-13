import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      // here we are creating a function that will add the 'reminder' class to our div

      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      {/* passing in our task's text */}
      <h3>
        {task.text}
        {/* React icon */}
        {/* when clicked, it will trigger OnDelete event, which triggers the DeleteTask function */}
        <FaTimes
          style={{ color: "#dc2626", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
