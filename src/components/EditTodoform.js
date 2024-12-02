import React, { useState } from 'react'

const EditTodoform = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task);

  const handleSubmit=(e)=>{
    e.preventDefault();
    editTodo(value,task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
      <button type="submit" className='todo-btn'>Modify</button>
    </form>
  )
}

export default EditTodoform
