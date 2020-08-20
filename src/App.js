import React, { useState } from "react"
import { TodoInput, TodoList } from "./components/"
import { v4 as uuidv4 } from "uuid"

import "./App.css"

function App() {
  const [todos, setTodo] = useState([])

  // add Todo
  const addTodo = (value) => {
    const todoItem = {
      id: uuidv4(),
      text: value,
      complete: false,
    }
    setTodo([...todos, todoItem])
  }

  // checked todo
  const checkTodo = (id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    )
  }

  // delete Todo
  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <h1>Hello World</h1>

      <TodoInput addTodo={addTodo} />

      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
