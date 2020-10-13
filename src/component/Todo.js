import React,{useContext,useState} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Todo = ({task}) => {
    const {deleteTask, EditTask} = useContext(GlobalContext);
const [edit, setEdit] = useState(false);
const [UpdateTask, setUpdateTask] = useState("");

if (edit) {
   return(
   <>
 <input type="text"  value={UpdateTask} onChange={(e)=>setUpdateTask(e.target.value)} placeholder={task.taskName}/>
 <button className="" onClick={()=> {
         const eTask ={
        id: task.id,
        taskName:UpdateTask
         }
    EditTask(eTask);
    setEdit(false);
     
     }} >Edit</button>
 <button className="" onClick={()=> setEdit(false)} >Close</button>
 </>
   )
}

return (
               <li className="plus">
        {task.taskName} 
        {
          

        }
        <button onClick={()=> deleteTask(task.id)} className="delete-btn">X</button>
        <button onClick={()=> setEdit(true)} className="edit-btn">Edit</button>
         
             </li>
        
    )
}

  