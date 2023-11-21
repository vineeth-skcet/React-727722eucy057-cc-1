import { useState } from "react";
import "./Clock.css";

const App = () =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <div className="body1"><h1>{ctime}</h1></div>)
}
export default App