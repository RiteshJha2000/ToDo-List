import React from 'react'
import Todoitem from './Todoitem';

export default function Todos(props) {

   const myStyle={
       minHeight:"70vh",
       border:"2px solid black",
       marginTop:"10px",
       marginBottom:"100px",
       borderRadius:"10px",
       backgroundColor:"#dedede"
       
   }
   const head={
    border:"5px solid black",
    margin:"30vw",
    padding:"10px",
    borderRadius:"20px",
    backgroundColor:"white",
    fontFamily:"Ubuntu",
    fontWeight:"bold"
   }

   document.title = "ToDo List"

  return (
    <div className='container' style={myStyle}>
        <h4 className='text-center my-3' style={head}>My Todos</h4>
        {props.todo.length===0?"No ToDo to display":
        props.todo.map((todo)=>{
            return (
                <div key={todo.no}>
                  <Todoitem todo={todo} OnDelete={props.OnDelete}/><hr/>
                </div>
                )
        })
        }
    </div>
  )
}
