import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ProjectTable = () => {
    const [items,setItems] = useState([])
    // const [scolu,setColu] = useState(['customer','date','status'])
    const [it,setIt] = useState([])
    const [count,setCount]=useState('')
    
    useEffect(()=>{
        axios
            .get('https://my-json-server.typicode.com/Ved-X/assignment/orders')
            .then( (res) => {
                console.log(res.data)
                setItems(res.data)
                setIt(res.data)
            })
            .catch( (err)=>
            {
                
            } )
    },[])

    const colu =items[0] && Object.keys(items[0])
    // console.log(colu)
     console.log(count)


    const filterHandle = (event) =>{
        setCount(event.target.value)
        // const columns = items[0] && Object.keys(items[0])
        const update= it.filter( (i) => {
            return(
                i.customer.toLowerCase().indexOf(count.toLowerCase())>-1||
                i.date.toString().toLowerCase().indexOf(count.toLowerCase())>-1||
                i.status.toLowerCase().indexOf(count.toLowerCase())>-1

            )
        })
        console.log(update)
        console.log(count)
        setItems(update)
    }
    return (
    <>
    <div>
    <input type='text' value={count} onChange={filterHandle}/>
    {/* {
        colu.map( (b)=> {
            return(
                <label><input type='checkbox' checked={scolu.includes(b)} 
                /> {b} </label>
            )
        } )
    } */}
    </div>
    <table cellPadding={10} cellSpacing={5} className='table'> 
    <thead>
                {
                    colu.map((i)=>{
                        return(
                            <th>{i}</th>
                        )
                    })
                }
            </thead>
            <tbody>
               {
                   items.map( (r)=>{
                       return(
                           <tr>
                               {colu.map( (j)=>{
                                   return(
                                       <td>{r[j]}</td>
                                   )
                               })}
                           </tr>
                       )
                   } )
               }
            </tbody>
        </table>
    </>
    )
}

export default ProjectTable
