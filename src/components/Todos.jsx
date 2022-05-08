import React, { useState, useContext } from 'react'
import AddEditTodoModal from './AddEditTodoModal';

import { ModalsContext } from "../contexts/ModalsProvider"

const Todos = () => {
  const { addEditModal, setAddEditModal } = useContext(ModalsContext);
  const [todos, setTodos] = useState([{
    title: "todo",
    text: "something..."
  }]);



  return (
    <div>
      <h2>My Todos</h2>
      <div>
        <button onClick={() => setAddEditModal(true)}>Add Todo</button>
      </div>
      <div>

        {todos.map((todo, i) => (
          <div key={i}>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        ))}
      </div>

      {addEditModal &&
        <AddEditTodoModal />
      }
    </div>
  )
}

export default Todos