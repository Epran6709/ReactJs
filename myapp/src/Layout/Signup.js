import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Signup = () => {
  return (
    <>
    <Nav/>
      <div className="col-md-6 mx-auto p-5 my-3 shadow-lg">
        <main className="form-signin">
            <form>
                <center className="top"><img src='./img/logo.png'/></center>
                <h1 className="h3 mb-3 fw-normal text-center text-decoration-underline">Create Account</h1>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingfname" placeholder="First Name here"/>
                    <label for="floatingfname">First Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatinglname" placeholder="Last Name here"/>
                    <label for="floatinglname">Last Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="floatingldate" placeholder="Date of birth"/>
                    <label for="floatingdate">Date of Birth</label>
                </div>

                    <label className="mb-3 ">Gender
                        <div className="d-flex">
                            <div className="form-check">
                                <input className="form-check-input mt-1 ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label ms-1" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mt-1 ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label ms-1" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mt-1 ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                <label className="form-check-label ms-1" for="flexRadioDefault3">
                                    Other
                                </label>
                            </div>
                        </div>
                    </label>
                

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password"/>
                    <label for="floatingCPassword">Confirm Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> I agree to terms and conditions.
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                Already have an account? <Link to="signin.html">Sign in.</Link>

                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </main>
    </div>
    <Footer/>
    </>
  )
}

export default Signup