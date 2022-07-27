import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios';
//import { deleteUser ,getallUsers } from '../../services/userService';

export default function ListUser() {


   const [data,setData]=useState([])
   useEffect(() => {
       
      
    getResults()

return () => {
  //second
  alert("Record id deleted")
}
}, [])

   const getResults=async()=>{
    const result = await axios('http://localhost:8000/users');
   // setData(result)
    console.log(result.data)
    setData(result.data)
  }

    


        const deleteData = async (id) => {
        console.log(id)
        const response=await axios.delete(`http://localhost:8000/users/${id}`);
            console.log(response)
            getResults()
        }   
    
  return (

    <div>
    <main id="main">
  


  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
  
  {data.length>0?
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            
            data.map((res)=>{

return (
<>
          
            <tr>
              <td>{res.id}</td>
              <td>{res.firstName}</td>
              <td>{res.lastName}</td>
              <td>{res.email}</td>
              <td><button>Update</button></td>
              <td><button onClick={() => deleteData(res.id)}>Delete</button></td>
            </tr>
            </>
)
        })

}

          </tbody>
        </Table>
        :"No Records Yet"}
        </section>
        </main>
        </div>
      );
    
}
   

