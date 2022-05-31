import React, { useState } from "react";

const AddTodo = ({ onAddTodo, submitted, setSubmitted }) => {
  const [todo, setTodo] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(todo)
    setTodo("");

    setTimeout(() => setSubmitted(false), 1500);
  };

  return (
    <>
      <form className="flex justify-center mt-10">
        <div className="bg-purple-300 px-4 py-2 rounded-lg w-96">
          <h1 className="text-center mt-4 mb-4 text-2xl text-white font-bold">
            Add a Todo
          </h1>
          <div className="mt-6 flex space-x-4 m-10 justify-center">
            <input
              className="bg-gray-100 rounded-md py-2 px-4 border-2 outline-none"
              name="todo"
              value={todo}
              placeholder="Todo Title"
              onChange = {onInputChange}
            />
            <button className="bg-purple-700 text-white px-4 rounded-md font-semibold" onClick={onSubmit}>
              Add
            </button>
          </div>
          {submitted && (
            <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4" role="alert">
            <p className="font-bold">Successfully added a todo!</p>
          </div>
          )}
        </div>
      </form>
    </>
  );
};

export default AddTodo;
