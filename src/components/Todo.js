import React from "react";

const Todo = ({ todo, markTodo, onDeleteTodo }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" relative justify-center mt-6 w-96">
          <div
            className="bg-white px-8 pt-8 pb-6 rounded-md text-gray-500 shadow-lg"
            style={{
              textDecoration: todo.isComplete ? "line-through" : undefined,
            }}
          >
            <div
              key={todo.id}
              onClick={() => {
                markTodo(todo.id);
              }}
            >
              {todo.title}
            </div>
          </div>
          <div className="absolute flex top-5 right-0 p-3 space-x-2">
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => onDeleteTodo(todo.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
