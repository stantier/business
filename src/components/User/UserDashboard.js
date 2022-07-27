import React from 'react'
import ListUser from './ListUser'


export default function UserDashboard() {
   
  return (
    <div>
    <main id="main">
<h2 className='text-black'>User Dashboard</h2>

  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
    <div class='container'>
    <h2>User List</h2>
    <ListUser />
   
</div>
</section>
</main>
    </div>
  )
}
