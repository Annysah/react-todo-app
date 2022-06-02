import React, { useState } from 'react'
import AddTodo from "./components/AddTodo";
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const markTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };


  const onAddTodo = (title) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = { id, title, isComplete: false };
    setTodos([...todos, newTodo]);

    setSubmitted(true)
  };

  const onDeleteTodo = id => {
    const filterTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filterTodo)
  }

  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} submitted={submitted} setSubmitted = {setSubmitted} />
      <Todos todos={todos} markTodo={markTodo} onDeleteTodo={onDeleteTodo} />
    </div>
  )
}

export default App