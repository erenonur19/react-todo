
import TodoComp from './components/TodoComp';
import TodosList from './components/TodosList';
import { useState } from 'react';

function App() {
  
  const [todos,settodos]=useState(['Learn React','Take a Nap'])
  const deleteTodo =(id)=>{
   settodos(todos.filter((todo,index)=> index!==id))

  }
  return(
    <div>
    <TodoComp setTodos={settodos} todos={todos}/>
     <TodosList settodos={settodos} todos={todos} deleteTodo={deleteTodo}/>
     </div> 
  )
 
 
}

export default App;
