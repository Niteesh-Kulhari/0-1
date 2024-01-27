import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './Component/Todo'

function App() {
  const [todos, setTodos] = useState([])

useEffect(()=>{
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  });
},[])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </div>
  )
}



export default App
