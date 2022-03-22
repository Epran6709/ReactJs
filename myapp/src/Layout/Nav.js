import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div>
        <form className="form-inline">
          <div className="input-group">
            <input type="text" className="form-control bg-dark text-white" placeholder="What are you looking for?" aria-label="Search for..."></input>
            <span className="input-group-btn">
              <button className="btn btn-danger" type="button"><i className="ion-search"></i></button>
            </span>
          </div>
        </form>
      </div>
      <nav className="topnav">
        <div className="topnav-centered">
          <Link to="#">NepalKo</Link>
        </div>
        <Link to="/home"><i className="fa fa-home" aria-hidden="true"> Home</i></Link>
        <Link to="/featured"><i className="fa fa-bolt" ria-hidden="true"> Featured</i></Link> 
        <div className="topnav-right">
          <Link to="/signin"><i className="fa fa-sign-in" aria-hidden="true"> Signin</i></Link>
          <Link to="/signup"><i className="fa fa-user-plus" aria-hidden="true"> Signup</i></Link>
          <Link to="/cart"><i className="fa fa-cart-plus" aria-hidden="true"> Cart</i></Link>
        </div>
      </nav>
    </>
  )
}

export default Nav