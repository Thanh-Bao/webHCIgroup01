import React, { Component } from "react";
import "./Home/styte.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>hưlllllllllllllllllllllllllllllllllllllllllllllllllll</h1>
        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg")' }} />
              <div className="carousel-caption">
                <h2 className="animated fadeInLeft">Caption Animation</h2>
                <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="animated fadeInUp"><a href="#" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
              </div>
            </div>
            <div className="item">
              <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg")' }} />
              <div className="carousel-caption">
                <h2 className="animated fadeInDown">Caption Animation</h2>
                <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="animated fadeInUp"><a href="#" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
              </div>
            </div>
            <div className="item">
             
              <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/campus.jpg")' }} />
              <div className="carousel-caption">
                <h2 className="animated fadeInRight">Caption Animation</h2>
                <p className="animated fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="animated fadeInRight"><a href="#" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="icon-prev" />
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="icon-next" />
          </a>
        </div>

      </div>

    );
  }
}

export default Home;
