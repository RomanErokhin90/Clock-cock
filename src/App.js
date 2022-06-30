import React, {useState, useEffect} from "react";
import '../src/styles/App.css'

function App() {
  let timerId;
  const [time, setTime] = useState(0);
  const [booltimer, setBoolTimer] = useState(false);


  useEffect(() => {
      if (booltimer)
      {
         let timerId = setTimeout(() => {
            setTime(time + 1);
            console.log(time+1)
          }, 1000);
          return () => clearTimeout(timerId)
      }
  }, [time,booltimer]);

  function formattime(t1) {
    let t2;
    let s =~~(t1/60);
    let m =t1 % 60;
    if (s < 10) {s = '0'+s}
    if (m < 10) {m = '0'+m}
    t2 =s +':' + m
    return t2
  }

 

  return (
    <div className="App">   
        <div className="timebox">{formattime(time)}</div> 
        {booltimer === false &&
        <button onClick={() => {
          setBoolTimer(true)
          }}>
          Старт
       </button>
        } 
       {booltimer &&
        <button onClick={() => {
          clearInterval(timerId)
          setBoolTimer(false)
        }}>
          Стоп
        </button>
        }
        <button onClick={() => {
          clearInterval(timerId)
          setBoolTimer(false)
          setTime(0)
        }}>
          Reset
        </button>
    </div>
  );
}

export default App;

