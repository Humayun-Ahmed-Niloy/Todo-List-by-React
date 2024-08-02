import { useState } from 'react'
import React from 'react'
import Header from './Components/Header.jsx'
import { Tasklist } from './Components/Tasklist.jsx'
import Addtask from './Components/Addtask.jsx'
import Footer from './Components/Footer.jsx'
import style from './Apps.css'


export const App = () => {
  const [lists,upgradeList] = useState([]);
  return (
    <>
      <Header />
      <main>
      <Addtask lists={lists} upgradeList={upgradeList}/>
      <Tasklist lists={lists} upgradeList={upgradeList}/>
      </main>
      <Footer />
    </>
  )
}

export default App;