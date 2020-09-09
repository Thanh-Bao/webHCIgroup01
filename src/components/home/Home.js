import React, { Component } from "react";
import "../../CSS/home.css";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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


        <div>
  {/* Services Section Begin */}
  <section className="services spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Our technology</h2>
            <img src="media/home/icon/ti.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-html5"> </i>
            <h4>HTML5 &amp; Video</h4>
            <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-css3-alt"> </i>
            <h4>CSS 3</h4>
            <p>is a style sheet language used for describing the presentation of a document</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-react"> </i>
            <h4>ReactJS</h4>
            <p>React  is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-js-square"> </i>
          
            <h4>Javascript</h4>
            <p>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-font-awesome"> </i>
            <h4>Font Awesome</h4>
            <p>Font Awesome is a font based on CSS and Less. It was made by Dave Gandy and later was incorporated into the BootstrapCDN</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="services__item">
          <i style={{"font-size":"6em"}} className="fab fa-google"> </i>
            <h4>Google font</h4>
            <p>Google Fonts is a library free licensed font families, an interactive web directory for browsing the library</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  
  {/* Counter Section Begin */}
  <div className="counter spad set-bg" data-setbg="media/home/counter-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="counter__item">
            <img src="media/icon/ci-1.png" alt="" />
            <h2 className="counter_num">8365</h2>
            <p>view/day</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="counter__item">
            <img src="media/icon/ci-2.png" alt="" />
            <h2 className="counter_num">568</h2>
            <p>like/day</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="counter__item">
            <img src="media/icon/ci-3.png" alt="" />
            <h2 className="counter_num">849</h2>
            <p>share/day</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="counter__item">
            <img src="media/icon/ci-4.png" alt="" />
            <h2 className="counter_num">2574</h2>
            <p>report</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Counter Section End */}
  {/* Request Form Section Begin */}
  <section className="request">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7">
          <div className="request__form">
            <div className="section-title">
              <span>wellcome to group01</span>
              <h2>Contact us</h2>
              <p>We will respond as soon as possible</p>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 px-2">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 px-2">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-12 px-2 text-center">
                  <textarea placeholder="Message" defaultValue={""} />
                  <button type="submit" className="site-btn">send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Request Form Section End */}
</div>np

       

      </div>
    );
  }
}

export default Home;
