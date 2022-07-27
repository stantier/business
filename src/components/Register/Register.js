import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate =useNavigate();
 
  const [user, setUser] = useState([]);

  const initialValues= {
    firstName:'',
    lastName:'',
    email: '',
    password:''

  }
 
  //console.log(user)
  const validate = values => {

    const errors = {};
 
  
 
    if (!values.firstName) {
 
      errors.firstName = 'Required';
 
    } else if (values.firstName.length < 2 ) {
 
      errors.firstName = 'Must be 15 characters or less';
 
    }
 
  
 
    if (!values.lastName) {
 
      errors.lastName = 'Required';
 
    } else if (values.lastName.length > 20) {
 
      errors.lastName = 'Must be 20 characters or less';
 
    }
 
  
 
    if (!values.email) {
 
      errors.email = 'Required';
 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 
      errors.email = 'Invalid email address';
 
    }

    return errors;
 
  };

 
  function onSubmit(values) {
   
    const fields=JSON.stringify(values)
   // alert(JSON.stringify(values, null, 2));

   const result=axios.post('http://localhost:8000/users',values)
   
   setUser([...user, result])
  if(result){

   alert("Data added")
   navigate('../users/list')
   
  }else{
   alert("Data is not added")
  }



  }



  const formik = useFormik({

    initialValues:initialValues,
    validationSchema: Yup.object({

      firstName: Yup.string()

        .min(2, 'Must be 15 characters or less')
        .max(15, 'Must be 15 characters or less')

        .required('Required'),

      lastName: Yup.string()

        .max(20, 'Must be 20 characters or less')

        .required('Required'),

      email: Yup.string().email('Invalid email address').required('Required'),

    }),
    onSubmit:onSubmit

  });
  return (
    <div>

<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
          
            <h5 className="card-title text-center mb-5 fw-light fs-5">User Register</h5>
            <form method="post" onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" name="firstName"   onChange={formik.handleChange}  onBlur={formik.handleBlur}

value={formik.values.firstName} className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">First Name</label>
                
              </div>
              {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
              {formik.touched.firstName && formik.errors.firstName ? (

<div>{formik.errors.firstName}</div>

) : null}


              <div className="form-floating mb-3">
                <input type="text" name="lastName"   onChange={formik.handleChange}  onBlur={formik.handleBlur}

value={formik.values.lastName}  className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Last Name</label>
 
              </div>
              {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
              <div className="form-floating mb-3">
                <input type="email" name="email"  onChange={formik.handleChange}  onBlur={formik.handleBlur}

value={formik.values.email}  className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
                
              </div>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <div className="form-floating mb-3">
                <input type="password" name="password" onChange={formik.handleChange}  onBlur={formik.handleBlur}

value={formik.values.password}  className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
                
              </div>
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold"  type="submit">Register
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
 

  )
}
