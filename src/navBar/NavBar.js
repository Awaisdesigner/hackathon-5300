import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo1 from '../assets/logo.png'
import logo from '../assets/logo2.png'



function NavBar(props) {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal' 
     
    }
  }

  return (
    <div>

      <nav className="navbar navbar-expand-md bg-success">
        <div className="container-fluid">
          <img style={{width: '100px', height: '60px'}} src={logo} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ backgroundColor: 'black', color: 'white' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" >
                <NavLink style={navLinkStyles} className="nav-link active hov" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyles} className="nav-link active hov" aria-current="page" to="/service">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink style={navLinkStyles} className="nav-link active hov" aria-current="page" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyles} className="nav-link active hov" aria-current="page" to="/signup">SignUp</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyles} className="nav-link active hov" aria-current="page" to="/logout">LogOut</NavLink>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;