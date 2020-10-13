import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export const AddTodo = () => {

    const [task, setTask] = useState("")
    const {AddNewTask,deleteAllTask } = useContext(GlobalContext);
const onSubmit=e =>{
    e.preventDefault();

    const newTask ={
        id: Math.floor(Math.random()*100000000),
        taskName:task
         }
    AddNewTask(newTask);
    
}
   



    return (
        <>
        <h3>Add New Task</h3>
      <form onSubmit={onSubmit}>
      <div className="form-control">

<label htmlFor="text">Task</label>
<input type="text"  value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter Task..."/>
    
      </div>

      <button className="btn">Add Task</button>

      </form>
      <button onClick={()=>{deleteAllTask()}}className="btn">Delete All Task</button>


      </>
   )
}
