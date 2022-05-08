import React, { useState, useContext, useEffect } from 'react';
import AddEditTodoModal from './AddEditTodoModal';

import { ModalsContext } from '../contexts/ModalsProvider';
import { TodosContext } from '../contexts/TodosProvider';

import "../App.css";
import { Button, SubmitButton, StyledCard, CardBody } from './styled/Components.styled';

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
        <Button onClick={() => setAddEditModal(true)}>Add Todo</Button>
      </div>
      <div>
        {todos.map((todo, i) => (
          <StyledCard key={i}>
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            <SubmitButton padding={"4px 40px"} onClick={() => editTodo(todo)}>Edit</SubmitButton>
            <SubmitButton padding={"4px 40px"} color={"#fff"} bg={"#ff5429"} onClick={() => deleteTodo(todo.id)}>Delete</SubmitButton>
          </StyledCard>
        ))}
      </div>

      {addEditModal &&
        <AddEditTodoModal existingTodo={currentTodo} />
      }
    </div>
  )
}

export default Todos