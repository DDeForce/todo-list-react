import React, { useState } from 'react'

const AddEditTodoModal = () => {
  const [todo, setTodo] = useState({});
  return (
    <div>
      <h3>Add Modal</h3>
      <div>
        <input placeholder='title'></input>
        <textarea placeholder='text for todo...'></textarea>
      </div>
      <div>
        <button>Add Todo</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default AddEditTodoModal