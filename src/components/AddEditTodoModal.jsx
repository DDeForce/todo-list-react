import React, { useState, useContext } from 'react'

import { ModalsContext } from "../contexts/ModalsProvider"
import { TodosContext } from '../contexts/TodosProvider';

const AddEditTodoModal = () => {
  const { setAddEditModal } = useContext(ModalsContext);

  const { todos, setTodos } = useContext(TodosContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTodo = () => {
    console.log("todos: ", todos)
    setTodos([...todos, { title: title, text: text }]);

    setTitle("");
    setText("")
    setAddEditModal(false);
  }

  return (
    <div>
      <h3>Add Modal</h3>
      <form>
        <input placeholder='title' onChange={(e) => setTitle(e.target.value)}></input>
        <textarea placeholder='text for todo...' onChange={(e) => setText(e.target.value)}></textarea>
      </form>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={() => setAddEditModal(false)}>Cancel</button>
      </div>
    </div >
  )
}

export default AddEditTodoModal