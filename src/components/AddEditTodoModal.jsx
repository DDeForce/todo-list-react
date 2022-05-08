import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { ModalsContext } from '../contexts/ModalsProvider';
import { TodosContext } from '../contexts/TodosProvider';

import { PopupContainer, PopupInner, SubmitButton } from './styled/Components.styled'

const AddEditTodoModal = ({ existingTodo }) => {
  const { setAddEditModal } = useContext(ModalsContext);
  const { todos, setTodos } = useContext(TodosContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTodo = () => {
    const generateId = uuid();
    setTodos([...todos, { id: generateId, title: title, text: text }]);

    setTitle("");
    setText("");
    setAddEditModal(false);
  }

  const editTodo = () => {
    const updatedTodo = {
      id: existingTodo.id,
      title: title,
      text: text
    }

    setTodos(prev => prev.map(todo => (todo.id === existingTodo.id ? updatedTodo : todo)));
    setAddEditModal(false);
  }

  useEffect(() => {
    if (existingTodo != null) {
      setTitle(existingTodo.title);
      setText(existingTodo.text);
    }
  }, [existingTodo])

  return (
    <PopupContainer>
      <PopupInner>
        {existingTodo == null ? <h3>ADD MODAL</h3> : <h3>Edit Modal</h3>}
        <form>
          {existingTodo == null ?
            <>
              <input type='text' placeholder='title' onChange={(e) => setTitle(e.target.value)}></input>
              <textarea type='text' placeholder='text for todo...' onChange={(e) => setText(e.target.value)}></textarea>
            </> : <>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
              <textarea type='text' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </>
          }
        </form>
        <div>
          {existingTodo == null ?
            <SubmitButton onClick={addTodo}>Add Todo</SubmitButton >
            :
            <SubmitButton onClick={editTodo}>Edit Todo</SubmitButton >
          }

          <SubmitButton color={"#fff"}
            bg={"#ff5429"} onClick={() => setAddEditModal(false)}>Cancel</SubmitButton>
        </div>
      </PopupInner >
    </PopupContainer>
  )
}

export default AddEditTodoModal