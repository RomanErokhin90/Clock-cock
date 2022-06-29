import React, {useState, useEffect, useContext} from "react";
import '../src/styles/App.css'

function App() {
   const [time, setTime] = useState(0);
   const [timerBool, setTimerBool] = useState(false)

    let timerId; 

   
   function Starttime() {
      timerId = setInterval(() => {  
        setTime(time + 1)
      }, 1000);
   }

   console.log(time)

   function Stoptime() {
    clearInterval(timerId)
   }

 
  return (
    <div className="App">
        <div className="timebox">{time}</div>     
        <button onClick={() => {
          Starttime()
          setTimerBool(true)
          }
        }>
          Старт
        </button>
        <button onClick={() => {
          Stoptime()
          setTimerBool(false)
          }
        }>
          Стоп
        </button>
    </div>
  );
}

export default App;

