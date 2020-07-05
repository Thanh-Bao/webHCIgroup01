import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavigationBar.css";
class NavigationBar extends Component {




  
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="/">
                    <img src="media/logo.png" alt="Group 01" />
                  </a>

                  {/* menu button for mobile */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* ___________________________________________ */}
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <NavLink
                        className="nav-link"
                        to="/home"
                        activeClassName="current_content"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-home"></i> Home
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        className="nav-link"
                        to="/diary"
                        activeClassName="current_content"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fas fa-history"></i> Diary
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        className="nav-link"
                        to="/about"
                        activeClassName="current_content"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="far fa-address-card"></i> About
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        className="nav-link"
                        to="/result"
                        activeClassName="current_content"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fas fa-trophy"></i> Result
                          </span>
                        </li>
                      </NavLink>

                      {/* <form>
                        <input type="search" placeholder="Search" />
                      </form> */}

                    

                      
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
