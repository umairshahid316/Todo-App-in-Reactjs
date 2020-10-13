import React from 'react';
import logo from './logo.svg';
import './App.css';
//component
import {Header} from './component/Header';
import {AddTodo} from './component/AddTodo';
import {TodoList} from './component/TodoList';
//context
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div>
    <Header/>
      <div className="container">
     <GlobalProvider>   
        <AddTodo/>
        <TodoList/>
        </GlobalProvider>
      </div>

    </div>
  );
}

export default App;
