import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@repo/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button appName='react'>
        Hi there
      </Button>
    </>
  )
}

export default App
