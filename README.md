# To-Do App

A simple and responsive To-Do list application built using **React**, **Node.js**, **Express**, and **Tailwind CSS**. The app allows users to add, update, and delete tasks, with a clean UI.

🚨 **Important**: Since the app is deployed on Render, the server may take up to 1 minute to wake up if idle, so please allow some time for the site to load initially.

## Live Demo

Check out the live demo of the app here:  
🔗 [To-Do App on Render](https://kaushalam-task-frontend.onrender.com/)

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)
- [Instructions to Run Locally](#instructions-to-run-locally)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)

---

## Features
- Add new tasks to your to-do list.
- Update tasks with new information.
- Complete tasks by by simply marking them complete.
- Delete tasks once completed.
- Clean and modern design with Tailwind CSS.

---

## Technologies Used
### Frontend
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: For responsive CSS design.
- **Vite**: Development tool for building React apps.

### Backend
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js to build the API.
- **MongoDB**: Database for storing the tasks.
- **Render**: For deploying both frontend and backend.

---

## Challenges Faced
1. **Server Idle Time**: One challenge faced was dealing with Render's waiting time. The server goes idle when unused for a while and can take up to 1 minute to wake up. To handle this, a loading indicator was implemented on the frontend, and users are informed about the delay.


---

## Instructions to Run Locally

### Backend Setup

1. **Clone the repository:**
   clone the repository using its url
   git clone <url>

2. **Navigate to folder:**
   cd Backend

3. **Install dependencies:**
   npm i

4. **Create a .env file in the root directory and add your MongoDB connection string::**
   MONGO_URI=your_mongodb_connection_string

5. **Run the backend server:**
   npm run dev
   or
   npm start


### Frontend Setup

1. **Clone the repository:**
   clone the repository using its url
   git clone <url>

2. **Navigate to folder:**
   cd Frontend

3. **Install dependencies:**
   npm i

4. **Set up the backend API URL in your frontend application. Update the URI in the App.js file**
   const URI = 'http://localhost:5000/';

5. **Run the frontend server:**
   npm run dev


## Note
The backend runs on the port 5000
The frontend runs on the port 5173