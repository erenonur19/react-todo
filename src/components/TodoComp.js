import React from 'react'
import{ useState} from 'react'


const TodoComp = ({setTodos, todos}) => {

//   const handleSubmit =(e)=>{
//     setTodos([...todos,todoVal])
//   }  

  const [todoVal,settodoVal]=useState('')
  return (
    <form className='todo-form'>
        <input type="text"  
        id='form-inp'
        placeholder='Enter your Todos'
        onChange={(e)=> settodoVal(e.target.value)}
        ></input>
        <button onClick={(e)=>{
            e.preventDefault()
            if(todoVal===""){
                alert("Please enter a todo!")
            }
            else if(todos.includes(todoVal)){
                alert("Todo already exists!")
            }
            else{
                setTodos([...todos,todoVal])
                document.querySelector("#form-inp").value=''
            }
            
        }}>
        <i className="fa-solid fa-plus"></i>
        </button>
    </form>
  )
}

export default TodoComp
