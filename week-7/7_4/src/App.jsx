import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalCount } from './store/atoms';
function App() {
  
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
 
}


function MainApp(){
  const networkNoticcationCount = useRecoilValue(networkAtom);
  const [messageNotification, setMessageNotification] = useRecoilState(messagingAtom);
  const jobsNotification = useRecoilValue(jobsAtom);
  const notification = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalCount);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNoticcationCount>=100 ? "99+" : networkNoticcationCount})</button>
      <button>Jobs ({jobsNotification})</button>
      <button>Messaging ({messageNotification})</button>
      <button>Notifications ({notification})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
