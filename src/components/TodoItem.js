import React from "react"
import PropTypes from "prop-types"

export const TodoItem = ({ todo, checkTodo, deleteTodo }) => {
  function changeStyle() {
    return {
      background: "#f4f4f4",
      padding: "10px",
      textDecoration: todo.complete ? "line-through" : "none",
      margin: "5px 0",
    }
  }

  return (
    <li style={changeStyle()} className="TodoItem">
      <input type="checkbox" onChange={() => checkTodo(todo.id)} />
      {todo.text}
      <button className="removeBtn" onClick={() => deleteTodo(todo.id)}>
        {" "}
        Add Todo
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}
