import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function App() {

  const[id, setID] = useState(1);

  return (
    <div>
      <button onClick={()=>setID(1)}>1</button>
      <button onClick={()=>setID(2)}>2</button>
      <button onClick={()=>setID(3)}>3</button>
      <button onClick={()=>setID(4)}>4</button>
      <button onClick={()=>setID(5)}>5</button>
      <Todo id={id}/>
    </div>
  )
}




function Todo({id}){
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todo?id="+id)
    .then(async function(res){
      let json = await res.json();
      setTodo(json.todo);
    })
  },[id])

  return(
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>

  )

}

export default App
