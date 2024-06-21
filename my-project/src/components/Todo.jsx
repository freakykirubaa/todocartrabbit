import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (task.trim()) {
      try {
        if (editId) {
          await axios.put(
            `http://localhost:3001/api/tasks/${editId}`,
            { task },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setEditId(null);
        } else {
          await axios.post(
            "http://localhost:3001/api/tasks",
            { task },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
        setTask("");
        fetchTasks();
      } catch (error) {
        console.error("Error adding/editing task:", error);
      }
    }
  };

  const editTask = (id, task) => {
    setEditId(id);
    setTask(task);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Todo Application</h1>
        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
          editId={editId}
        />
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
