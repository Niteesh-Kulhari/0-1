import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
  )
}

function TextComponent(){
  return <div>
    hi there
  </div>
}
  
function CardWrapper({innerComponent}){
  return<div style={{border: " solid black"}}>
    {innerComponent}
  </div>
}

export default App
