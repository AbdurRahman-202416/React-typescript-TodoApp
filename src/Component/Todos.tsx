import React from "react";
import ShowTodo from "./Todo";

type todos = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoProps = {
  todos: todos[]; // Fix: Correctly defining the props as an array
};

const Todo: React.FC<TodoProps> = ({ todos }) => {
 

  return (
    <div className="grid grid-cols-2 gap-4">
      {todos.map((todo) => (
        <ShowTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Todo;
