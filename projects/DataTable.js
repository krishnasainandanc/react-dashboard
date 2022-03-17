import React from 'react'



const DataTable = ({data}) => {
    
    const col=data[0] && Object.keys(data[0])
    console.log(data)
    return (
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    {
                       data[0] && col.map((i)=> {
                            return(
                                <th>{i}</th>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        data.map(row => {
                            return(
                                <tr key={row.order_id}>
                                    {
                                        col.map( j =>{return(
                                            <td key={row.order_id}>{row[j]}</td>
                                        )})
                                    }
                                </tr>
                            )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
