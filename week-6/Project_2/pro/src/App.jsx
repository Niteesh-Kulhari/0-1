import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react'
import { Todos } from '../Components/Todos/Todos'


function App() {
  const[todos, setTodos] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
       const json = await res.json();
        setTodos(json.todos);
      })
    }, 5000)
  }, [])

  return (
    <div>
      <Todos todos={todos}></Todos>
    </div>
  )
}

// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

export default App
