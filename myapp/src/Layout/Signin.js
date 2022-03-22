import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

const Signin = () => {
  return (
    <>
    <Nav/>
     <div className="col-md-6 mx-auto p-5 my-5 shadow-lg text-center">
        <main className="form-signin">
            <form>
              <center className="top"><h1>NepalKo</h1></center>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
          
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">Sign in</button>
              <div className="Account"> Do not have an account?<Link to="/signup">Create an Account</Link></div> 
              
            </form>
          </main>
      </div>
      <Footer/>
    </>
  )
}

export default Signin