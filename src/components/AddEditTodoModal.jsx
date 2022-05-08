import React, { useState, useContext } from 'react'

import { ModalsContext } from "../contexts/ModalsProvider"

const AddEditTodoModal = () => {
  const { setAddEditModal } = useContext(ModalsContext);
  const [todo, setTodo] = useState({});

  const addTodo = () => {

    setAddEditModal(false);
  }

  return (
    <div>
      <h3>Add Modal</h3>
      <form>
        <input placeholder='title'></input>
        <textarea placeholder='text for todo...'></textarea>
      </form>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={() => setAddEditModal(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddEditTodoModal