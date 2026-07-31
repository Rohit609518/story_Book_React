import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import { useEffect, useState } from "react";



function App() {
 
  const [task,setTask] = useState(()=>{

  const saved = localStorage.getItem("tasks");
    if(!saved || saved === "undefined"){
      return [];
    }

     try {
      return JSON.parse(saved)
     } catch (error) {
       return []
     }
  });

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(task))
  },[task])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home task={task} setTask={setTask} />} />
        <Route path="/about" element={<About  task={task} setTask={setTask}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;