import React, {useState, useEffect} from "react";



function Hui() {
setInterval(() => {
  
    console.log("hui")
}, interval);
}

function App() {



  const [timeup, setTimeup] = useState(0);


  return (
    <div className="App">
        <h1>{timeup}</h1>

        

        <button onClick={() => setTimeup(timeup + 1)}>
          Хуй
        </button>
    </div>
  );
}

export default App;
