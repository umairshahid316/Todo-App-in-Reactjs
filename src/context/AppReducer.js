import React, {useReducer} from "react";

export default (state,action) => {
    switch (action.type) {
        case "Delete_Task": 
    return{ 
...state, task:state.task.filter(task => task.id !== action.payload)
    }
    case "Delete_All_Task": 
    return{ 
task:[] 
    }
    case "Add_Task":
        return{
            ...state, task:[action.payload, ...state.task]
        }
        case "Edit_Task":
        return{
            ...state, task:[action.payload, ...state.task.filter(task => task.id !== action.payload.id)]
        }
        default:
            return state;
    }
}