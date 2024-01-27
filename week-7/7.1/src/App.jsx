import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Landing } from './components/Landing'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
//import { Dashboard } from './components/Dashboard'
const Dashboard = lazy(()=> import ('./components/Dashboard'))
const Landing =  lazy(()=> import('./components/Landing')) 

function App() {
  

  return (
    <>
    

    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
  
    </>
  )

  function Appbar(){
    const navigate = useNavigate();

    return <div>
      <button onClick={()=>{
        navigate('/')
      }}>Landing Page</button>

      <button onClick={()=>{
        navigate('/dashboard')
      }}>Dashboard</button>

    </div>
  }
}

export default App
