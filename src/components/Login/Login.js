import React from 'react'
import './Login.css'
import { useFormik } from 'formik';

import { useLocation } from 'react-router-dom'

export default function Login() {

  const userData={
    email:'',
    password:''
  }
  const formik = useFormik({

    initialValues:userData,

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

    },

  });

  return (
    <div>

<div>

  {/* This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! */}
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">User Sign In</h5>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                <input type="email" name="email"  onChange={formik.handleChange}

value={formik.values.email} className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox"  
                onChange={formik.handleChange}

value={formik.values.email} defaultValue id="rememberPasswordCheck" />
                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr className="my-4" />
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-google me-2" /> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2" /> Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        
    </div>
  )
}
