import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={

    task:[
    
          { id: 1, taskName: 'reading' },
          { id: 2, taskName: 'driving' },
          { id: 3, taskName: 'watching tv' },
          { id: 4, taskName: 'playing' }
    ]

}

export const GlobalContext =createContext(initialState);

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
 
 
 let deleteTask = (id)=>{
dispatch(
    {
        type: "Delete_Task",
        payload: id
    }
);
 }

 let deleteAllTask = (id)=>{
    dispatch(
        {
            type: "Delete_All_Task",
            // payload: id
        }
    );
     }

 let AddNewTask = (task)=>{
    dispatch(
        {
            type: "Add_Task",
            payload: task
        }
    );
    
     }
    
     let EditTask = (task)=>{
        dispatch(
            {
                type: "Edit_Task",
                payload: task
            }
                    );
        console.log("Data ",task)
         }
    
     
    return(
        <GlobalContext.Provider value={

            {
                tasks: state.task,
                deleteTask,
                AddNewTask,
                deleteAllTask,
                EditTask
            }

        } >
            {children}</GlobalContext.Provider>

    );

}
