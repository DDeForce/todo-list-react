import React, { useState } from 'react'
import AddEditTodoModal from './AddEditTodoModal';

const Todos = () => {
  const [todos, setTodos] = useState([{
    title: "todo",
    text: "something..."
  }]);


  return (
    <div>
      <h2>My Todos</h2>
      <div>
        <button>Add Todo</button>
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

      <AddEditTodoModal />
    </div>
  )
}

export default Todos