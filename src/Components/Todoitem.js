import React from 'react'

export default function Todoitem({todo,OnDelete}) {
  return (
    <div>
        <h4 className='my-2'>Todoitem</h4>
        <p className='my-1'>{todo.no}{'>'} {todo.title}</p>
        <p>{todo.desc}</p> 
        <button type="button" className="btn btn-danger" onClick={()=>OnDelete(todo)}>Delete</button>
    </div>
  )
}
