import React, { useState } from 'react'
import { Link, Outlet,useParams} from 'react-router-dom'
import Productlist from '../components/Productlist';
// import TestComponent from './TestComponent';

export default function Products() {



    let params = useParams();
   // let {pid}=useParams()
   const myData = {
    name: 'Some thing',
    price: 23000
  }
  const products=[
    {
    pname:'Apple iPhone XR (Red, 128 GB)',
    price:'35000',
    image:'https://i.imgur.com/KFojDGa.jpg',
    description:'128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor'
  },
  {
    pname:'Apple iPhone XS (Silver, 64 GB)',
    price:'35000',
    image:'https://i.imgur.com/KFojDGa.jpg',
    description:'64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor'
  },
  {
    pname:'Apple iPhone XR (Red, 128 GB)',
    price:'75000',
    image:'https://i.imgur.com/6IUbEME.jpg',
    description:'128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor'
  },
]
  return (
    <div>

<main id="main">
  {/* ======= Breadcrumbs ======= */}
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Services</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Services</li>
        </ol>
      </div>
    </div>
  </section>{/* End Breadcrumbs */}
  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
    <div className="container" data-aos="fade-up">
    {/* <TestComponent /> */}
{/* <Productlist pname='nePlus 7 Pro (Almond, 256 GB)' price='23000' description='Rear Camera|48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide)| Front Camera|16 MP POP-UP Camera|8GB RAM|Android pie'/> */}

 <Productlist products={products}/> 


{/* <Productlist {...products} /> */}
<Outlet />
</div>
</section>
</main>
    </div>
  )
}
