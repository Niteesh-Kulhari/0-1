import axios from "axios"
import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import { networkAtom, totalCount } from './store/atoms';
import { useEffect } from 'react';
function App() {
  
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
 
}


function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const totalNotificationCount = useRecoilValue(totalCount);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount.network>=100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
