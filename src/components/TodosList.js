import React from 'react'
import TodoItems from './TodoItems'

const TodosList = ({todos,deleteTodo}) => {
  return (
    <div className='todo-list'>
        {todos.map((todo,index)=>(
            <TodoItems id={index} todo={todo} key={index} deleteTodo={deleteTodo}/>

        ))}

    </div>
  )
}

export default TodosList
