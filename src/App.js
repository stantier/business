import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Productlist from "./components/Productlist";
import Protectedroute from "./routes/Protectedroute";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";

import AdminLogin from "./components/Admin/Login/AdminLogin";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/teams" element={<Teams/>} />
    <Route path="/contact/:id" element={<Contact />} /> */}





          <Route path="login" element={<Login />} />

          

          <Route path="/" element={<Header />}>
           
            {/*  Public Routes....*/}
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />

          
            {/*  Protected  Routes....*/}

            <Route path="/" element={<Protectedroute />}>
              <Route path="products" element={<Products />}>
                <Route path="productlist" element={<Productlist />} />
              </Route>
            </Route>




          </Route>

 



        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
