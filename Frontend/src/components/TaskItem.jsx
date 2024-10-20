// frontend/src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onUpdateTask(task._id, { text: editText });
    }
    setIsEditing(!isEditing);
  };

  const handleComplete = () => {
    onUpdateTask(task._id, { completed: !task.completed });
  };
  
  return (
    <li className="flex items-center py-4 px-6 hover:bg-gray-50">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
      />
      <div className="ml-3 flex-grow">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        ) : (
          <span className={`text-gray-900 ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.text}
          </span>
        )}
      </div>
      <div className="ml-4 flex-shrink-0 space-x-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-200"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => onDeleteTask(task._id)}
           className="px-3 py-1 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

