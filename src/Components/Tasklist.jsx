import React from 'react'
import style from '../Components/tasklist.css'
import { useState } from 'react'


export const Tasklist = ({lists,upgradeList}) => {
    const [show,updateShow] = useState(true)

    function handleDelete(id){
        upgradeList(lists.filter(vals => vals.id !== id));
    }


  return (
    <div className="tasklist">
        <div className="tasktopbar">
            <h2>TASK PRO</h2>
            <button className='hidebtn' onClick={()=>updateShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        <div className="list">
            <ul>
                {show && lists.map((list)=>(
                    <li className={list.condition ? "listDone" : "Duelist"} key={list.id}>{list.value} <button onClick={()=>handleDelete(list.id)} className='list_btn'>Delete</button></li>
                ))}
            </ul>
        </div>
    </div>
  )
}