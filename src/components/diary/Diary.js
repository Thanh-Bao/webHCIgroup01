import React, { Component } from "react";
import Table from "./Table";
import Image from "./Image";

class Diary extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="space-bottom">
        <div id="align-top">
          {/*  <div className="container">
                       
              <nav aria-label="breadcrumb">
                 <ol className="breadcrumb ">
                   <li className="breadcrumb-item "><a href="https://hci2020group01.tk/home" className="color-bread thea"><strong>Home</strong></a></li>
                   <li className="breadcrumb-item active color-bread" aria-current="page">Diary</li>
                 </ol>
             </nav>
    </div>*/}

          <div className="container">
            {/* Nav tabs */}
            <nav>
              <div
                className="nav nav-tabs center-tabs text-center"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active size-tabs"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#week1"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <b>Tuần 1</b>
                </a>
                <a
                  className="nav-item nav-link size-tabs"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#week2"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <b>Tuần 2</b>
                </a>
                <a
                  className="nav-item nav-link size-tabs"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#week3"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b> Tuần 3</b>
                </a>
                <a
                  className="nav-item nav-link size-tabs"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#week4"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b> Tuần 4</b>
                </a>
                <a
                  className="nav-item nav-link size-tabs"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#week56"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b> Tuần 5&6</b>
                </a>
                <a
                  className="nav-item nav-link size-tabs"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#week78"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b> Tuần 7&8</b>
                </a>
              </div>
            </nav>
            {/* Tab panes */}
            <div className="tab-content">
              {/* week 1 */}
              <div id="week1" className="container tab-pane active">
                <br />
                <Table
                  congviecBao="Đăng kí domain & trỏ về hosting"
                  congviecDuong="Tìm tài liệu về firebase"
                  congviecCuong="Tìm hiểu về github"
                  congviecNghia="Tìm tài liệu về ReactJS, Bootstrap"
                  congviecHuan="Làm footer (Web nhóm)"

                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"

                  danhGiaBao="10/10"
                  danhGiaCuong="9.5/10"
                  danhGiaDuong="9/10"
                  danhGiaNghia="8.8/10"
                  danhGiaHuan="9/10"
                  week="TUẦN 1"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 1"
                  image="media/diary/week1.jpg"
                ></Image>
              </div>

              {/* week 2 */}
              <div id="week2" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  congviecBao="Tạo repository github, cấp quyền các thành viên join vào project "
                  congviecCuong="Cấu hình hosting"
                  congviecDuong="Làm trang Result (Web nhóm)"
                  congviecNghia="Làm trang Home (Web nhóm)"
                  congviecHuan="Làm footer (Web nhóm)"

                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"
                 
                  danhGiaBao="9.5/10"
                  danhGiaCuong="9/10"
                  danhGiaDuong="9.2/10"
                  danhGiaNghia="9.5/10"
                  danhGiaHuan="8.9/10"
                  week="TUẦN 2"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 2"
                  image="media/diary/week2.jpg"
                ></Image>
              </div>

              {/* week 3 */}
              <div id="week3" className="container tab-pane fade">
                <br />

                <Table
                  
                  congviecBao="Làm thanh Menu và tạo Router điều hướng URL các trang"
                  congviecCuong="Thiết Kế trang Login (Project)"
                  congviecDuong="Edit video, nén ảnh, design logo (Project)"
                  congviecNghia="Thiết kế trang Register (Project)"
                  congviecHuan="Thiết kế trang Register (Project)"

                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"

                  danhGiaBao="9.8/10"
                  danhGiaCuong="9.5/10"
                  danhGiaDuong="9.2/10"
                  danhGiaNghia="9/10"
                  danhGiaHuan="9/10"
                  
                  week="TUẦN 3"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 3"
                  image="media/diary/week3.jpg"
                ></Image>
              </div>

              {/* week 4 */}
              <div id="week4" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  congviecBao="Làm các bản tin web bất động sản, thêm animation cho web (Project)"
                  congviecCuong="Tạo Group Diary (Web nhóm)"
                  congviecDuong="Làm trang Result (Web nhóm)"
                  congviecNghia="Làm trang Home (Web nhóm)"
                  congviecHuan="Làm footer (Web nhóm)"

                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"

                  danhGiaBao="9.5/10"
                  danhGiaCuong="9.3/10"
                  danhGiaDuong="9/10"
                  danhGiaNghia="9.1/10"
                  danhGiaHuan="9.2/10"
                  week="TUẦN 4"
                  
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 4"
                  image="media/diary/week4.jpg"
                ></Image>
              </div>

              {/* week 5&6 */}
              <div id="week56" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  image=""
                  congviecBao="Thêm các plugin facebook, google, zalo, add-on text-to-speed"
                  congviecCuong="Tạo phần Login và Breadcrumb (Project)"
                  congviecDuong="Thiết kế trang Search (Project)"
                  congviecNghia="Thiết kế trang More (Project)"
                  congviecHuan="Thiết kế Form feedback (Project)"

                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"

                  danhGiaBao="9.8/10"
                  danhGiaCuong="9.5/10"
                  danhGiaDuong="9/10"
                  danhGiaNghia="9.2/10"
                  danhGiaHuan="9.7/10"
                  week="TUẦN 5&6"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 5&6"
                  image="media/diary/week5.jpg"
                ></Image>
                {/* <Image hinhanh="Hình Ảnh Tuần 5&6: Phân Công Về Nhà"></Image> */}
              </div>

              {/* week 78 */}
              <div id="week78" className="container tab-pane fade">
                <br />

                <Table
                  congviecBao="Tìm content cho web, test web, merge code thành viên, debug (Project)"
                  congviecCuong="Design menu, design hình ảnh bằng photoshop (Project)"
                  congviecDuong="Thiết kế trang Search (Project)"
                  congviecNghia="Thiết kế trang More (Project)"
                  congviecHuan="Thiết kế Form feedback project"
                 
                  ketquaBao="Hoàn thành"
                  ketquaCuong="Hoàn thành"
                  ketquaDuong="Hoàn thành"
                  ketquaNghia="Hoàn thành"
                  ketquaHuan="Hoàn thành"

                  danhGiaBao="10/10"
                  danhGiaCuong="9.3/10"
                  danhGiaDuong="9.5/10"
                  danhGiaNghia="9.6/10"
                  danhGiaHuan="9/10"
                  week="TUẦN 7&8"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 7&8"
                  image="media/diary/week7.jpg"
                ></Image>
                {/* <Image
                  hinhanh="Hai tuần này tụi em phân công về nhà làm. "
                  image=""
                ></Image> */}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Diary;
