import React from 'react'

const Student = (props) => {
let data=props.data
    return (
        <div>


    <table border="2px" style={{textAlign:"center", fontWeight:"bold" ,  backgroundColor:"pink"}}>
        <tr style={{color:"red"}} >
            <th >Student-Name</th>
            <th>Student-Id</th>
            <th>Branch</th>
            <th>Photo</th>
            <th>Phone-Number</th>
        </tr>
      {
        data.map((x)=>{
            return <tr>
                <td style={{color:"blue"}}>{x.name}</td>
                <td style={{color:"blue"}}>{x.id}</td>
                <td style={{color:"blue"}}>{x.branch}</td>
                <td><img src={x.photo} alt=""  height={"100px"}/></td>
                <td  style={{color:"blue"}}>
                    <ol>{x.phone.map((x)=>{
                        return <li>{x}</li>
                    })}</ol></td>
            </tr>
        })
      } 
    </table>
    </div>
  )
}

export default Student