import React from "react";

type todos = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const ShowTodo: React.FC<todos> = ({ id, title, description, completed }) => {
  return (
    <div className="p-4 border mx-auto w-full rounded-lg shadow-md text-white hover:shadow-2xl hover:shadow-gray-600 bg-gray-400 my-2">
      <h2 className="text-lg font-semibold">
        {" "}
        <span>{id}</span>) {title}
      </h2>
      <p className="text-sm">{description}</p>
      <p
        className={`text-xs my-2 text-semibold bg-white w-[30%]  rounded-full text-center ${
          completed ? "text-green-500" : "text-red-500"
        }`}
      >
        {completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default ShowTodo;
