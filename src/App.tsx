import { useState } from "react";
import Todo from "./Component/Todos";

type TodoType = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const data: TodoType[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    description: "Understand TypeScript basics and interfaces.",
    completed: false,
  },
  {
    id: 2,
    title: "Set up Vite Project",
    description: "Initialize a new React + TypeScript project using Vite.",
    completed: true,
  },
  {
    id: 3,
    title: "Install Tailwind CSS",
    description: "Configure Tailwind CSS with PostCSS in the project.",
    completed: true,
  },
  {
    id: 4,
    title: "Implement React Router",
    description: "Set up routing for Home and About pages.",
    completed: false,
  },
  {
    id: 5,
    title: "Create To-Do Component",
    description: "Build a component to display and manage to-do tasks.",
    completed: false,
  },
  {
    id: 6,
    title: "Add Task Form",
    description: "Create a form to add new tasks to the list.",
    completed: false,
  },
  {
    id: 7,
    title: "Enable Task Completion",
    description: "Implement functionality to mark tasks as completed.",
    completed: true,
  },
  {
    id: 8,
    title: "Store Tasks in Local Storage",
    description: "Persist tasks using browser's local storage.",
    completed: false,
  },
  {
    id: 9,
    title: "Improve UI with Tailwind",
    description: "Style the app using Tailwind CSS for a better look.",
    completed: true,
  },
  {
    id: 10,
    title: "Deploy the App",
    description: "Deploy the project to Vercel or Netlify.",
    completed: false,
  },
];

function App() {
  const [Todos, setTodos] = useState<TodoType[]>(data); 
  

  

  return (
    <>
      <Todo todos={Todos} />
     
    </>
  );
}

export default App;
