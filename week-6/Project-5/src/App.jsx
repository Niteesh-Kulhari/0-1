import { useState } from 'react'
import { useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  let sum = useMemo(function(){
    let final = 0;
    for(let i=num; i>=0; i--){
      final += parseInt(i);
    }

    return final;
  },[num]);


  return (
    <div>
      <input type='number' placeholder='Enter a value' onChange={(e)=>{
        let value = e.target.value;
        setNum(value);
      }}></input>

      <h3>Sum of the numbers is: {sum}</h3>

      <button onClick={()=>setCount(count+1)}> Count: {count}</button>
    </div>
  )
}

export default App
