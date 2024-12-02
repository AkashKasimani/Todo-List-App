import React,{useState} from 'react'

export const Todoform = ({addTodo}) => {
  const[value,setValue]= useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();
    if(value){
    
    addTodo(value);

    setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='TodoForm' >
      <input type="text" className='todo-input' value={value} onChange={(e) => setValue(e.target.value)} placeholder='What are the tasks today?' />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
 export default Todoform
