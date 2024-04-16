import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems=[{
    name:'Buy Milk',
    dueDate:'04/10/2023',
  },
{
  name:'Go To college',
  dueDate:'04/10/2023',
},
{
  name:'Go To college',
  dueDate:'04/10/2023',
}]

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
       <AddTodo></AddTodo>
       <TodoItems todoItems={todoItems}></TodoItems>
      
        </center>
    </>
  );
}

export default App;
