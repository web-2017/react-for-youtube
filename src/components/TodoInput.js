import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"

export const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState([])

  const pushTodo = () => {
    addTodo(value)

    setValue("")
  }

  return (
    <Fragment>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => pushTodo()}>add</button>
    </Fragment>
  )
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
