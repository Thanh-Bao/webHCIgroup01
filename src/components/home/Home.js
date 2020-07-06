import React, { Component } from "react";
import "../../CSS/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <div id="align-top"></div> */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="media/carousel_home/slide1.png"
                className="d-block w-100 img-home opacity-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block bt-text-center">
                <h2 className="h1-tieude">
                  Wellcome to <br />
                  Group 01 HCI 2020
                </h2>

                <div>
                  <a
                    href="https://group01-tintucbatdongsan.tk"
                    target="_blank"
                    style={{ "text-decoration": "none", fontWeight: "bold" }}
                  >
                    <div className="btnProject">
                      <span>Project</span>
                      <div className="dot"></div>
                    </div>
                  </a>
                </div>

                <p> Project tin tức bất đông sản</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="media/carousel_home/slide2.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block bt-text-centet">
                <a href="https://group01-tintucbatdongsan.tk/" target="_blank">
                  <a
                    href="https://group01-tintucbatdongsan.tk"
                    target="_blank"
                    style={{ "text-decoration": "none", fontWeight: "bold" }}
                  >
                    <div className="btnProject">
                      <span>Project</span>
                      <div className="dot"></div>
                    </div>
                  </a>
                </a>
                <p> Project tin tức bất đông sản</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="media/carousel_home/slide3.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block bt-text-centet">
                <a href="https://group01-tintucbatdongsan.tk/" target="_blank">
                  <a
                    href="https://group01-tintucbatdongsan.tk"
                    target="_blank"
                    style={{ "text-decoration": "none", fontWeight: "bold" }}
                  >
                    <div className="btnProject">
                      <span>Project</span>
                      <div className="dot"></div>
                    </div>
                  </a>
                </a>
                <p> Project tin tức bất đông sản</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
