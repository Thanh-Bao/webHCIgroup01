
import React, { Component } from "react";
import '../CSS/Footer/Footer.css'
import { NavLink } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="webintern-footer">
          <div className="webintern-footer-inner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 ">
                  <a className="webintern-footer-logo" href="#">
                    <img className="img-responsive" src="https://www.freelogodesign.org/img/logo-ex-4.png" style={{ width: '100px' }} alt="" />
                  </a>
                  <div className="simple-text dark padding-sm">
                    <p>We are group 1 and we will do our best.</p>
                  </div>
                  <div className="empty-space xs-25 sm-25" />
                </div>
                <div className="col-sm-6 col-md-2 footer-2">
                  {/* webintern_footer_title */}
                  <h4 className="webintern_footer_title h5"><small>Quick Links</small></h4>
                  <ul className="webintern-footer-list">
                    <NavLink
                      className="nav-link"
                      to="/home"
                      activeClassName="current_content"
                    >
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" style={{ color: 'white' }}>
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
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"  style={{ color: 'white' }}>
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
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"  style={{ color: 'white' }}>
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
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"  style={{ color: 'white' }}>
                        <span>
                          <i className="fas fa-trophy"></i> Result
                          </span>
                      </li>
                    </NavLink>
                  </ul>
                  <div className="empty-space xs-25 sm-25" />
                </div>
                <div className="col-sm-6 col-md-3 footer-3">
                  {/* webintern_footer_title */}
                  <h4 className="webintern_footer_title h5"><small> Our Courses </small></h4>
                  <ul className="webintern-footer-list">
                    <li><a href="#">Human-Computer Interaction </a></li>
                    <li><a href="#">Object-Oriented Design</a></li>
                    <li><a href="#">Intro Database</a></li>
                    <li><a href="#">Graph Theory</a></li>
                  </ul>
                  <div className="empty-space xs-25" />
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                  <div className="marg-sm-b30" />
                  {/* webintern_footer_title */}
                  <h4 className="webintern_footer_title h5"><small>Subscribe Newsletter</small></h4>
                  <div className="empty-space marg-lg-b20" />
                  <div className="empty-space marg-lg-b15" />
                  {/* TT-SUBSCRIBE */}
                  <form method="post">
                    <div className="tt-subscribe">
                      <input type="text" required placeholder="Enter your email" />
                      <div className="tt-subscribe-submit">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <input type="submit" defaultValue />
                      </div>
                    </div>
                  </form>
                  <div className="empty-space marg-lg-b30" />
                  {/* TT-SOCAIL */}
                  <ul className="tt-socail">
                    <li><a href="https://www.facebook.com/groups/605810996700128"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tt-copy">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="tt-copy-left">Copyright © company 2018. All rights reserved. </div>
                </div>
                <div className="col-sm-6">
                  <div className="tt-copy-right">
                    Created by: Huan
                </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
