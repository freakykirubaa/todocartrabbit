import { useState } from "react";

export default function TaskForm({ task, setTask, addTask, editId }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Add a new task"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white rounded p-2 mt-2 w-full"
        disabled={!task}
      >
        {editId ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}
