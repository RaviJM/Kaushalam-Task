// frontend/src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );

}

export default TaskList;