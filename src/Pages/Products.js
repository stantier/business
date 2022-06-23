import React from 'react'
import { Link, Outlet,useParams} from 'react-router-dom'
export default function Products() {

    let params = useParams();
   // let {pid}=useParams()

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
<h2>Product component</h2>
<h2>Product Id ={params.pid}</h2>
<button><Link to="productlist">Product List </Link></button>

<Outlet />
</div>
</section>
</main>
    </div>
  )
}
