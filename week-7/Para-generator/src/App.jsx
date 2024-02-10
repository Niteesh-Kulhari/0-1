import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './componenets/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">Paragraph Generator</div>
      <Input/>
    </>
  )
}

export default App
