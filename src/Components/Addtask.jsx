import React, { useState, useEffect } from 'react';
import style from '../Components/addtask.css';

export const Addtask = ({ lists, upgradeList }) => {
  const [id, updateId] = useState(lists.length + 1); // Start with the length of the list + 1
  const [input, updateInput] = useState("");
  const [progress, setProgress] = useState(false);

  function setupInput(event) {
    updateInput(event.target.value);
  }

  function clearWrite() {
    updateInput("");
    setProgress(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      id: id,
      value: input,
      condition: progress
    };
    upgradeList([...lists, task]);
    console.log(task);
    clearWrite();
    updateId(id + 1); // Increment the ID for the next task
  }

  return (
    <div className="add">
      <form onSubmit={handleSubmit}>
        <input onChange={setupInput} className='MainTask' type="text" placeholder='Enter Task' value={input} />
        <select className='sel' onChange={(event) => setProgress(event.target.value === "true")}>
          <option value="false">Pending</option>
          <option value="true">Complete</option>
        </select>
        <button onClick={clearWrite} className='reset'>Reset</button>
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addtask;