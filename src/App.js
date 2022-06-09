import React, {useState, useEffect} from "react";





function App() {

  useEffect(() => {
    let Int = setInterval(() => {
      document.title = `Вы нажали ${timeup} раз`;  
    }, 1000);
    
  });



  const [timeup, setTimeup] = useState(0);


  return (
    <div className="App">
        <h1>{timeup}</h1>

        

        <button onClick={() => 
          setTimeup(timeup + 1)
          }>
          Старт
        </button>

        <button onClick={() => setTimeup(timeup + 1)}>
          Стоп
        </button>
    </div>
  );
}

export default App;

