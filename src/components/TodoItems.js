import React from 'react'

const TodoItems = ({todo,deleteTodo,id}) => {
  return (
    <div className='todo-item'>
                <p>
                    {todo}
                </p>
                <i onClick={()=>{
                  deleteTodo(id)
                }} className="fa-regular fa-trash-can"></i>
            </div>
  )
}

export default TodoItems;
