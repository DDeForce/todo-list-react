import React, { useState, useContext, useEffect } from 'react';
import AddEditTodoModal from './AddEditTodoModal';

import { ModalsContext } from '../contexts/ModalsProvider';
import { TodosContext } from '../contexts/TodosProvider';

import "../App.css";


const Todos = () => {
  const { addEditModal, setAddEditModal } = useContext(ModalsContext);
  const { todos, setTodos } = useContext(TodosContext);

  const [currentTodo, setCurrentTodo] = useState(null);


  const editTodo = todo => {
    setCurrentTodo(todo);
    setAddEditModal(true);
  }

  const deleteTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  useEffect(() => {
    if (!addEditModal) {
      setCurrentTodo(null);
    }
  }, [addEditModal])
  return (
    <div className='App'>
      <h2>My Todos</h2>
      <div>
        <button onClick={() => setAddEditModal(true)}>Add Todo</button>
      </div>
      <div>

        {todos.map((todo, i) => (
          <div key={i}>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>

      {addEditModal &&
        <AddEditTodoModal existingTodo={currentTodo} />
      }
    </div>
  )
}

export default Todos