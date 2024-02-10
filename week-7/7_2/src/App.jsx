
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { CountContext } from './context';
import { useContext } from 'react';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {

  return (
    <>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>       
    </>
  )
}

function Count(){
  
  return <div>
    <CountRenderer/>
    <Buttons/>
    <NumberType/>
  </div>
}

function CountRenderer(){
  const count =  useRecoilValue(countAtom);
  return<div>
    count is {count};
  </div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count-1);
    }}>
      Decrement
    </button>

    <button onClick={()=>{
      setCount(count+1);
    }}>
      Increment
    </button>
  </div>
}

function NumberType(){
  const isEven = useRecoilValue(evenSelector);

  return(
    <div>
      {isEven ? "It is Even" : ""}
    </div>
  )
 
}

export default App
