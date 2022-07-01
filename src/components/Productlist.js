import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



export default function Productlist({products}) {
// const [user,setUser]=useState(['Koaml','Raj','Suman'])
const[user,setUser]=useState([{
  fname:'Rohan',
  lname:'Rana',
  email:'rohan@gmail.com'
}])

const getvalue=()=>{
  
//  setUser([...user,"Ramandeep","Vikas","Sonia"])
setUser([{

  fname:'Priya',
  lname:'Rana',
  email:'priya@gmail.com'
}])
}



const deleteData=()=>{
  user.push()
  alert("deleted")
}
  //console.log(products)
//const {pname,price,description}=products
//   let location=useLocation()
// let Category=location.state.catname;
//   console.log(location)
  return (
    <div>



<main id="main">
  
  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
    <div className="container" data-aos="fade-up">
{/* <h2>Product List Component :{Category}</h2> */}

{/* <h2>Category :{location.state.name} and price ={location.state.price}</h2> */}
<div className="container py-5">
  <div className="row text-center text-white mb-5">
    <div className="col-lg-7 mx-auto">
      <h1 className="display-4 text-black" >Product List</h1>
{/* 
      {
        products.map((product)=>{
return(
  <>
     <h1 className="text-black" >{product.pname}</h1>
      <p className="text-black">{product.description}</p>
      <p className="text-black">{product.price}</p> 
  </>
)

        })
      } */}

     <p class="text-black">User :{
       user.map((res)=>{
         return(
           <>
             <p>{res.fname}</p>
             <p>{res.lname}</p>
             <p>{res.email}</p>
           </>
         )

       })
     }</p>
     <button onClick={getvalue}>Add User</button>
     <button onClick={deleteData}>Delete User</button>
      {/* <h1 className="text-black" >{pname}</h1>
      <p className="text-black">{description}</p>
      <p className="text-black">{price}</p> */}
    </div>
  </div>
  <div className="row">
    <div className="col-lg-8 mx-auto">
      {/* List group*/}
      <ul className="list-group shadow">
        {/* list group item*/}
      
        {
        products.map((product)=>{
return(
        <>
        <li className="list-group-item">
          {/* Custom content*/}
          <div className="media align-items-lg-center flex-column flex-lg-row p-3">
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">{product.pname}</h5>
              <p className="font-italic text-muted mb-0 small">{product.description}</p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">₹ {product.price}</h6>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                </ul>
              </div>
            </div><img src={product.image} alt="Generic placeholder image" width={200} className="ml-lg-5 order-1 order-lg-2" />
          </div> {/* End */}
        </li> {/* End */}
</>

        )

        })
      }
      </ul> {/* End */}
    </div>
  </div>
</div>
</div>
</section>
</main>

    </div>
  )
}
