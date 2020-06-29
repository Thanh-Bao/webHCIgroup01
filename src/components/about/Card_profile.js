import React, { Component } from "react";
import "../../CSS/about/Card_profile_About.css";

class Card_profile extends Component {
  render() {
    return (
      <div className="our-team" >
        <div className="picture">
          <img
            className="img-fluid"
            src={this.props.avatar}
          />
        </div>
        <div className="team-content">
          <h3 className="name">{this.props.name}</h3>
          <h4 className="title">{this.props.MSSV}</h4>
          <h5 className="title">{"Lớp : "+this.props.classes}</h5>
        </div>
        <div className="social-group mt-5">
          {/* Web cá nhân Button */}
          <a
            href={this.props.linkWeb}
            target="blank"
          >
            <div className="social-icon link">
              <i className="fa fa-link" aria-hidden="true" />
            </div>
          </a>
          {/* facebook  Button */}
          <a
            href={this.props.facebook}
            target="blank"
            className="social-margin"
          >
            <div className="social-icon facebook">
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </div>
          </a>
          {/* Youtube Button */}
          <a
            href={this.props.youtube}
            target="blank"
            className="social-margin"
          >
            <div className="social-icon youtube">
              <i className="fab fa-youtube" aria-hidden="true" />
            </div>
          </a>
          
        </div>
      </div>
      
    );
  }
}

export default Card_profile;
