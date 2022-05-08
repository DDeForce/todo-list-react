import React, { useState, useContext, useEffect } from 'react'
import AddEditTodoModal from './AddEditTodoModal';

import { ModalsContext } from "../contexts/ModalsProvider"
import { TodosContext } from '../contexts/TodosProvider';

const Todos = () => {
  const { addEditModal, setAddEditModal } = useContext(ModalsContext);
  const { todos, setTodos } = useContext(TodosContext);


  useEffect(() => {
    console.log(todos)
  }, [todos])
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