import React, { Component } from "react";
import Table from "./Table";
import Image from "./Image";

class Diary extends Component {
  render() {
    return (
      <div className="space-bottom">
        <div id="align-top">
          <div className="container">
            {/* Nav tabs */}
            <ul className="nav  nav-pills space-tab center-tabs" role="tablist">
              <li className="nav-item size-tab">
                <a className="nav-link  active" data-toggle="tab" href="#week1">
                  Week 1
                </a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week2">
                  Week 2
                </a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week3">
                  Week 3
                </a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link " data-toggle="tab" href="#week4">
                  Week 4
                </a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week56">
                  Week 5,6
                </a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week78">
                  Week 7,8
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              {/* week 1 */}
              <div id="week1" className="container tab-pane active">
                <br />
                <Table
                  tiendo="Hoàn Thành"
                  congviecBao="Tìm tài liệu về Firebase"
                  congviecHuan="Tìm tài liệu về github"
                  congviecDuong="Cấu hình hosting"
                  congviecCuong="Đăng kí tên miền"
                  congviecNghia="Cập nhật web hàng tuần"
                  ketquaBao="Hoàn Thành"
                  ketquaCuong="Hoàn Thành"
                  ketquaDuong="Hoàn Thành"
                  ketquaNghia="Hoàn Thành"
                  ketquaHuan="Hoàn Thành"
                  week="TUẦN 1"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 1"
                  image="image/week1.jpg"
                ></Image>
              </div>

              {/* week 2 */}
              <div id="week2" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  congviecBao="Tạo Trang About"
                  congviecCuong="Tạo Group Diary"
                  congviecDuong="Làm trang Result"
                  congviecNghia="Làm trang Home"
                  congviecHuan="Làm footer"
                  ketquaBao=""
                  ketquaCuong=""
                  ketquaDuong=""
                  ketquaNghia=""
                  ketquaHuan=""
                  tiendo="70%"
                  week="TUẦN 2"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 2"
                  image="image/week2.jpg"
                ></Image>
              </div>

              {/* week 3 */}
              <div id="week3" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  congviecBao="Thiết Kế Trang Forgot Password"
                  congviecCuong="Thiết Kế trang Login"
                  congviecDuong="Thiết kế trang login"
                  congviecNghia="Thiết kế trang Register"
                  congviecHuan="Thiết kế trang Register"
                  tiendo="80%"
                  week="TUẦN 3"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 3"
                  image="image/week3.jpg"
                ></Image>
              </div>

              {/* week 4 */}
              <div id="week4" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  congviecBao="Tạo Trang About"
                  congviecCuong="Tạo Group Diary"
                  congviecDuong="Làm trang Result"
                  congviecNghia="Làm trang Home"
                  congviecHuan="Làm footer"
                  ketquaBao="Hoàn Thành"
                  ketquaCuong="Hoàn Thành"
                  ketquaDuong="Hoàn Thành"
                  ketquaNghia="Hoàn Thành"
                  ketquaHuan="Hoàn Thành"
                  week="TUẦN 4"
                  tiendo="Hoàn Thành"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 4"
                  image="image/week4.jpg"
                ></Image>
              </div>

              {/* week 5&6 */}
              <div id="week56" className="container tab-pane fade">
                <br />

                <Table
                  tienDo="Hoàn Thành"
                  image=""
                  congviecBao="Thiết kế Trang Home Project và Đổi ngôn ngữ"
                  congviecCuong="Thiết kế Phần Login và Breadcrumb"
                  congviecDuong="Thiết kế trang Search"
                  congviecNghia="Thiết kế trang More"
                  congviecHuan="Thiết kế Form feedback project"
                  tiendo="70%"
                  week="TUẦN 5 & 6"
                ></Table>
                <Image
                  hinhanh="Hình Ảnh Tuần 5&6: Phân Công Về Nhà"
                  image="image/week56.png"
                ></Image>
              </div>

              {/* week 78 */}
              <div id="week78" className="container tab-pane fade">
                <br />

                <Table
                  congviecBao="Thiết kế Trang Home Project và Đổi ngôn ngữ"
                  congviecCuong="Thiết kế Phần Login và Breadcrumb"
                  congviecDuong="Thiết kế trang Search"
                  congviecNghia="Thiết kế trang More"
                  congviecHuan="Thiết kế Form feedback project"
                  tiendo="Hoàn Thành"
                  ketquaBao="Hoàn Thành"
                  ketquaCuong="Hoàn Thành"
                  ketquaDuong="Hoàn Thành"
                  ketquaNghia="Hoàn Thành"
                  ketquaHuan="Hoàn Thành"
                  week="TUẦN 7&8"
                ></Table>
                <Image
                  hinhanh="Hai tuần này tụi em phân công về nhà làm. "
                  image=""
                ></Image>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Diary;
