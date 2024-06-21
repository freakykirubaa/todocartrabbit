export default function TaskList({ tasks, editTask, deleteTask }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            className="border-b p-2 flex justify-between items-center"
          >
            {task.task}
            <div>
              <button
                onClick={() => editTask(task._id, task.task)}
                className="bg-yellow-500 text-white rounded p-2 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white rounded p-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  