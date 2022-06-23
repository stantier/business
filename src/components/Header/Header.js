import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
{/* ======= Header ======= */}
<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><a href="index.html"><span>Com</span>pany</a></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>   <Link to="/">Home</Link></li>
        
          
        <li><Link to="services">Services</Link></li>


        <li><Link to="teams">Teams</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
    <div className="header-social-links d-flex">
      <a href="#" className="twitter"><i className="bu bi-twitter" /></a>
      <a href="#" className="facebook"><i className="bu bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bu bi-instagram" /></a>
      <a href="#" className="linkedin"><i className="bu bi-linkedin" /></a>
    </div>
  </div>
</header>{/* End Header */}


      <Outlet />  
    </div>
  )
}
