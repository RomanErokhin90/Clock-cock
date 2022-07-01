import React, {useState, useEffect} from "react";
import '../src/styles/App.css'
import BootstrapTable from "react-bootstrap-table-next";

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

  const person = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'},
    {id: 4, name: 'George Michael', value: '4'},
    {id: 5, name: 'George Michael', value: '4'},
    {id: 6, name: 'George Michael', value: '4'},
    {id: 7, name: 'George Michael', value: '4'},
    {id: 8, name: 'George Michael', value: '4'},
    {id: 9, name: 'George Michael', value: '4'},
    {id: 10, name: 'George Michael', value: '4'},
    {id: 11, name: 'George Michael', value: '4'},
    {id: 12, name: 'George Michael', value: '4'},
    {id: 13, name: 'George Michael', value: '4'},
    {id: 14, name: 'George Michael', value: '4'},
    {id: 15, name: 'George Michael', value: '4'},
    {id: 16, name: 'George Michael', value: '4'},
    {id: 17, name: 'George Michael', value: '4'},
    {id: 18, name: 'George Michael', value: '4'}
  ];
  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'value',
    text: 'Product value',
  }];

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
        <p className="Table-header">Basic Table</p>
        <BootstrapTable 
          striped
          hover
          keyField='id' 
          data={person} 
          columns={columns}
        />



    </div>
  );
}

export default App;

