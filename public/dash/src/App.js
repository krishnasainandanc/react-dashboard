import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import DataTable from './DataTable'
//import Pr from './components/ProjectTable';
require('es6-promise').polyfill();


function App() {
  const [data,setData]=useState([])
  const [columns,setColumns] = useState(['customer','date','status'])
  const[q,setQ] = useState('')
  
  useEffect( () => {
    axios
      .get('https://my-json-server.typicode.com/Ved-X/assignment/orders')
      .then( (res) => {
          console.log(res.data)
          setData(res.data)
      })
      .catch( (err) => {
        console.log(err)
      })
  },[])
  function search(da)
  {
    
    const update=da.filter((row)=>{return(
      //i.customer.toLowerCase().indexOf(q.toLowerCase())>-1
      columns.some((i)=>{return(
        row[i].toString().toLowerCase().indexOf(q.toLowerCase())>-1
      )
      })
    )})
    return update
  }
  const col=data[0] && Object.keys(data[0])
  return (
    <div className="App">
        <div className='display'>
        <input type='text' placeholder='search' value={q} onChange={e =>{return(setQ(e.target.value))}}/>
        <h2><b>DashBoard</b></h2>
        </div>
        <div>
          {
            data[0] && col.map((i)=>{return(
              <label class="container"><input type='checkbox' checked={columns.includes(i)}
                onChange={(e)=>{
                  const check=columns.includes(i)
                  setColumns((prev)=>{return(check? columns.filter((j)=>{return(j!==i)}):[...columns,i])})
                }}
              />
              <span class="checkmark"></span>
              {i}</label>
            )})
          }
        </div>
        <DataTable data={search(data)}/>
    </div>
  );
}

export default App;
