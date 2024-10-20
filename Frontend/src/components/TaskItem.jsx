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
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleComplete}>{task.completed ? 'Unmark' : 'Complete'}</button>
      <button onClick={() => onDeleteTask(task._id)}>Delete</button>
    </li>
  );
}

export default TaskItem;

