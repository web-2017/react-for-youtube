import React from "react"
import PropTypes from "prop-types"
import { TodoItem } from "./index"

export const TodoList = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <ul className="Todo">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}
