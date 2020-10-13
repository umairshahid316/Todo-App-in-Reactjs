import React,{useContext} from 'react'
import { Todo } from './Todo';
import {GlobalContext} from '../context/GlobalState';
export const TodoList = () => {
    const {tasks} = useContext(GlobalContext); 
 
    return (
        <div>
        <h3>Task list</h3>
        <ul  className="list">
       
        {tasks.map((task)=>(
         <Todo key={task.id} task={task} />
   

         )
         )
        }
      
           
            </ul>  
      </div>
    )
}
