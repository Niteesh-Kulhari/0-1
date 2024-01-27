import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from './components/Landing'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'

function App() {
  

  return (
    <>
    

    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Landing/>}/>
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
