import React, { Component } from 'react';
import Table from './Table';
import Image from './Image'


class Diary extends Component {
  render() {
    return (
      <div className="space-bottom">
        <div id="align-top">

          <div className="container">
            {/* Nav tabs */}
            <ul className="nav  nav-tabs space-tab center-tabs" role="tablist">
              <li className="nav-item size-tab">
                <a className="nav-link  active" data-toggle="tab" href="#week1">Week 1</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week2">Week 2</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week3">Week 3</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week4">Week 4</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week5">Week 5</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week6">Week 6</a>
              </li>
              <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week7">Week 7</a>
              </li> <li className="nav-item size-tab">
                <a className="nav-link" data-toggle="tab" href="#week8">Week 8</a>
              </li>


            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              {/* week 1 */}
              <div id="week1" className="container tab-pane active"><br />
                <Table tienDo="Hoàn Thành" congviecBao="Tìm hiểu về firebase và github" congviecHuan="Tìm hiểu về firebase và github"
                  congviecDuong="Tìm hiểu về firebase và github"
                  congviecCuong="Tìm hiểu về firebase và github" congviecNghia="Tìm hiểu về firebase và github" week="TUẦN 1"></Table>
                <Image hinhanh="Hình Ảnh Tuần 1" image="image/week1.jpg"></Image>
              </div>



              {/* week 2 */}
              <div id="week2" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" congviecBao="Tạo Trang About" congviecCuong="Tạo Trang About"
                  congviecDuong="Tạo Trang About"
                  congviecNghia="Tạo Trang About" congviecHuan="Tạo Trang About" ketquaBao="Đường link tới About" ketquaCuong="Đường link tới About" ketquaDuong="Đường link tới About"
                  ketquaNghia="Đường link tới About" ketquaHuan="đường link tới About" week="TUẦN 2" ></Table>
                <Image hinhanh="Hình Ảnh Tuần 2" image="image/week2.jpg" ></Image>

              </div>


              {/* week 3 */}
              <div id="week3" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" congviecBao="Thiết Kế Trang Forgot Password" congviecCuong="Thiết Kế trang Login"
                  congviecDuong="Thiết kế trang login"
                  congviecNghia="Thiết kế trang Register" congviecHuan="Thiết kế trang Register" week="TUẦN 3"></Table>

              </div>

              {/* week 4 */}
              <div id="week4" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" image="" congviecBao="" congviecCuong=""
                  congviecDuong=""
                  congviecNghia="" congviecHuan="" week="TUẦN 4"></Table>

              </div>

              {/* week 5 */}
              <div id="week5" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" image="" congviecBao="" congviecCuong=""
                  congviecDuong=""
                  congviecNghia="" congviecHuan="" week="TUẦN 5"></Table>

              </div>

              {/* week 6 */}
              <div id="week6" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" image="" congviecBao="" congviecCuong=""
                  congviecDuong=""
                  congviecNghia="" congviecHuan="" week="TUẦN 6"></Table>

              </div>

              {/* week 7 */}
              <div id="week7" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" image="" congviecBao="" congviecCuong=""
                  congviecDuong=""
                  congviecNghia="" congviecHuan="" week="TUẦN 7"></Table>

              </div>

              {/* week 8 */}
              <div id="week8" className="container tab-pane fade"><br />

                <Table tienDo="Hoàn Thành" image="" congviecBao="" congviecCuong=""
                  congviecDuong=""
                  congviecNghia="" congviecHuan="" week="TUẦN 8"></Table>

              </div>


            </div>  </div>
        </div>

      </div>
    );
  }
}

export default Diary;