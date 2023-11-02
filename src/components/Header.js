import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/auth";

const Header = () => {
  return (

    <div className="bg-light">
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div>
              <span className="navbar-brand">
                Blog-App
              </span>
            </div>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                  activeClassName="active"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/create"
                  activeClassName="active"
                >
                  Create
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary" onClick={logout}>
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      
    </div>
    
      
    
  );
};

export default Header;
