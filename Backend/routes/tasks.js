// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new task
router.post('/', async (req, res) => {
    // Check if the text is empty or only whitespace
    if (!req.body.text || req.body.text.trim().length === 0) {
        return res.status(400).json({ message: "Task text cannot be empty" });
    }

    const task = new Task({
        text: req.body.text.trim() // Trim whitespace from the beginning and end
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a task
router.put('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      let updatedFields = {};
  
      if (req.body.text !== undefined) {
        const trimmedText = req.body.text.trim();
        if (trimmedText.length === 0) {
          return res.status(400).json({ message: "Task cannot be empty" });
        }
        updatedFields.text = trimmedText;
      }
  
      if (req.body.completed !== undefined) {
        updatedFields.completed = req.body.completed;
      }
  
      // Only update and save if there are changes
      if (Object.keys(updatedFields).length > 0) {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          { $set: updatedFields },
          { new: true, runValidators: true }
        );
        res.json(updatedTask);
      } else {
        res.status(400).json({ message: "No valid updates provided" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // await task.remove();
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
