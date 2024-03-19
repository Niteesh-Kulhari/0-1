import { useEffect, useState } from 'react'
import axios from 'axios'


function useTodos(){
  const[todos, setTodos] = useState([]);
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos);
      setLoading(false)
    })
  },[])


  return {todos,loading};
}


function useIsOnline(){
  const[isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(()=>{
    window.addEventListener('online',()=>setIsOnline(true))
    window.addEventListener('online',()=>setIsOnline(false))
  },[])

  return isOnline;
}

function useMousePointer(){
  const[mousePosition, setMousePosition] = useState({x:0, y:0});

  const handleMOuseMove = (e)=>{
    setMousePosition({x:e.clientX, y:e.clientY})
  }

  useEffect(()=>{
    window.addEventListener('mousemove',handleMOuseMove )

    return()=>{
      window.removeEventListener('mousemove', handleMOuseMove)
    }
  },[])

  return mousePosition;
}


function App() {
  const {todos, loading} = useTodos();

  if(loading){
    return<div>Loding....</div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App





function useInterval(callback, delay){
  useEffect(()=>{
    const interval = setInterval(callback,delay);

    return(){
      clearInterval(interval)
    }
  },[callback,delay])
}