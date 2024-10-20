// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const URI = `https://kaushalam-task-backend.onrender.com/`;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${URI}api/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (text) => {
    try {
      const response = await fetch(`${URI}api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const newTask = await response.json();
      setTasks([newTask, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, updates) => {
    if ('text' in updates && updates.text.trim().length === 0) {
      setError("Task text cannot be empty");
      return;
    }

    try {
      const response = await fetch(`${URI}api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update task');
      }
      const updatedTask = await response.json();
      setTasks(tasks.map(task => task._id === id ? updatedTask : task));
      setError(null);
    } catch (error) {
      console.error('Error updating task:', error);
      setError(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${URI}api/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Todo List</h1>
          {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <TaskForm onAddTask={addTask} />
            </div>
            <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
          </div>
        </div>
      </div>
  
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Made with <span className="text-red-600">❤️</span> by 
          <a 
            href="https://github.com/RaviJM" 
            className="text-indigo-600 hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            RaviJM
          </a>
        </p>
      </footer>
    </div>
  );
  
  
}

export default App;
