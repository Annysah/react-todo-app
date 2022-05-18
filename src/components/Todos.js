import React from "react";

import Todo from "./Todo";

const Todos = ({ todos, markTodo, onDeleteTodo }) => {
  return (
    <div>
      <div className="h-screen">
        <div>
          <div>
           {todos && todos.map((todo) => (
              <Todo key={todo.title} todo={todo} markTodo={markTodo} onDeleteTodo={onDeleteTodo} />
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
