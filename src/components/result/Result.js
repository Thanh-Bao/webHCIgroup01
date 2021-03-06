import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
class Result extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/* <div className="container">
              <nav aria-label="breadcrumb">
                 <ol className="breadcrumb ">
                   <li className="breadcrumb-item "><a href="https://hci2020group01.tk/home" className="color-bread thea"><strong>Home</strong></a></li>
                   <li className="breadcrumb-item active color-bread" aria-current="page">Result</li>
                 </ol>
             </nav>
    </div>*/}
        <div className="section-padding-100-0 mt-4">
          <div className="col-12 p-0">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    <h2 className="mt-15">
                      <h1>Thành quả đạt được của nhóm</h1>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="why-choose-us-content  mb-80">
                    <div className="chosse-us-icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/tuanduongnlu.appspot.com/o/AvatarTranThanhBao.png?alt=media&token=ef58423f-30fc-4169-9591-fec279bb5c4f" />
                    </div>
                    <h3 className="text-center">Trần Thanh Bảo </h3>
                    <div className="price-block">
                      <div className="price-content-wrapper">
                        <div className="price-content price-bot">
                          <h4>Trang web Project</h4>
                          <ul className="task pl-2">
                            <li>
                              <a href="" target="_blank">
                                <span> 1. Làm Trang Home </span>
                              </a>
                            </li>
                            <li>
                              <span> 2. Xây dựng Router cho web </span>
                            </li>
                            <li>
                            <span>3. Đăng kí domain và deploy project</span>
                            
                            </li>
                            <li>
                            <span>4. Thêm plugin facebook, google</span>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content price-bot">
                          <h4>Trang web nhóm</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 5. Trang Home</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://hci2020group01.tk/about"
                                target="_blank"
                              >
                                <span> 6. Trang About</span>
                              </a>
                            </li>
                            <li>
                              <span> 7. Menu và điều hướng</span>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content">
                          <h4>Đánh giá</h4>
                          <ul className="pl-2">
                            <li>Hoàn thành: 100%</li>
                            <li className="judge">Đóng góp: 22%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mt-16">
                        <a
                          target="_blank"
                          href="https://baonlu.com/result"
                          className="btn1 btn-primary2"
                        >
                          <i className="fa fa-star" /> Đánh giá cá nhân
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="why-choose-us-content mb-80">
                    <div className="chosse-us-icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/tuanduongnlu.appspot.com/o/avatarNghia.png?alt=media&token=3a710f3c-2cdf-42ec-b6ae-e839a2f53fa2" />
                    </div>
                    <h3 className="text-center">Hồ Quốc Nghĩa </h3>
                    <div className="price-block">
                      <div className="price-content-wrapper">
                        <div className="price-content price-bot">
                          <h4>Trang web Project</h4>
                          <ul className="task pl-2">
                            <li>
                              <a href="" target="_blank">
                                <span> 1. Làm Trang About </span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 2. Design trang more </span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 3. Register, Forgot password phần login</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 4. Làm chức năng comments </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content price-bot">
                          <h4>Trang web nhóm</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 5. Trang Home</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://hci2020group01.tk/about"
                                target="_blank"
                              >
                                <span> 6. Trang About</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 7. Trang styte guide</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content">
                          <h4>Đánh giá</h4>
                          <ul className="pl-2">
                            <li>Hoàn thành: 100%</li>
                            <li className="judge">Đóng góp: 19%</li>
                          </ul>
                          <div />
                        </div>
                      </div>
                      <div className="text-center mt-16">
                        <a
                          target="_blank"
                          href="https://hoquocnghianlu.tk/#resume"
                          className="btn1 btn-primary2 btn-sm"
                        >
                          <i className="fa fa-star" /> Đánh giá cá nhân
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="why-choose-us-content mb-80">
                    <div className="chosse-us-icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/tuanduongnlu.appspot.com/o/avatarDuong.png?alt=media&token=3b8c60ae-c2c3-4823-83bd-bf1f7d5ff4bd" />
                    </div>
                    <h3 className="text-center">Lê Tuấn Dương </h3>
                    <div className="price-block">
                      <div className="price-content-wrapper">
                        <div className="price-content price-bot">
                          <h4>Trang web Project</h4>
                          <ul className="task pl-2">
                            <li>
                              <span>1. Test web</span>
                            </li>
                            <li>
                              <a
                                href="https://group01-tintucbatdongsan.tk/"
                                target="_blank"
                              >
                                <span> 2. Làm footer </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://group01-tintucbatdongsan.tk/"
                                target="_blank"
                              >
                                <span> 3. Thêm blugin translate </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://group01-tintucbatdongsan.tk/more"
                                target="_blank"
                              >
                                <span> 4. Trang more </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content price-bot">
                          <h4>Trang web nhóm</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 5. Trang Home</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://hci2020group01.tk/style-guide"
                                target="_blank"
                              >
                                <span> 6. Trang Style Guide</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 7. Trang Result</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content">
                          <h4>Đánh giá</h4>
                          <ul className="pl-2">
                            <li>Hoàn thành: 100%</li>
                            <li className="judge">Đóng góp: 20%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mt-16">
                        <a
                          target="_blank"
                          href="https://tuanduongnlu.tk/#Result"
                          className="btn1 btn-primary2"
                        >
                          <i className="fa fa-star" /> Đánh giá cá nhân
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="why-choose-us-content mb-80">
                    <div className="chosse-us-icon">
                      <img src="media/avatar/avatarCuong.png" />
                    </div>

                    <h3 className="text-center">Nguyễn Văn Cương </h3>
                    <div className="price-block">
                      <div className="price-content-wrapper">
                        <div className="price-content price-bot">
                          <h4>Trang web Project</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 1. Làm Trang Login </span>
                              </a>
                            </li>
                            <li>
                              <span> 2. Tìm content cho bài viết </span>
                            </li>
                            <li>
                              <span>3. Design menu, làm layout menu </span>
                            </li>
                            <li>
                              <span> 4. Design hình ảnh </span>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content price-bot">
                          <h4>Trang web nhóm</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 5. Trang Home</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 6. Trang breadcrumb</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://hci2020group01.tk/diary"
                                target="_blank"
                              >
                                <span> 7. Trang diary</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content">
                          <h4>Đánh giá</h4>
                          <ul className="pl-2">
                            <li>Hoàn thành: 100%</li>
                            <li className="judge">Đóng góp: 21%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mt-16">
                        <a
                          target="_blank"
                          href="https://cuongnguyennlu.tk/result"
                          className="btn1 btn-primary2"
                        >
                          <i className="fa fa-star" /> Đánh giá cá nhân
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="why-choose-us-content mb-80">
                    <div className="chosse-us-icon">
                      <img src="media/avatar/avatarHuan.jpg" />
                    </div>
                    <h3 className="text-center">Võ Đoàn Minh Huân </h3>
                    <div className="price-block">
                      <div className="price-content-wrapper">
                        <div className="price-content price-bot">
                          <h4>Trang web Project</h4>
                          <ul className="task pl-2">
                            <li>
                              <a href="" target="_blank">
                                <span> 1. Tìm kiếm hình ảnh </span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 2. Sửa lỗi </span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 3. Nhập dữ liệu</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 4. Tạo Search </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content price-bot">
                          <h4>Trang web nhóm</h4>
                          <ul className="task pl-2">
                            <li>
                              <a
                                href="https://hci2020group01.tk/home"
                                target="_blank"
                              >
                                <span> 5. Trang Home</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 6. Trang form feedback</span>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <span> 7. Trang footer</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="price-content">
                          <h4>Đánh giá</h4>
                          <ul className="pl-2">
                            <li>Hoàn thành: 100%</li>
                            <li className="judge">Đóng góp: 18%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mt-16">
                        <a target="_blank" href="https://minhhuan.tk/Result">
                          <i className="fa fa-star" /> Đánh giá cá nhân
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
