import React, { Component } from "react";
import Card_profile from "./Card_profile";
import "../../CSS/about/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>

        <div className="container">
          <h1 className="text-center my-5 pb-2">ĐỘI NGŨ PHÁT TRIỂN WEBSITE</h1>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="row ">
                <div className="col-12">
                  <div className="Leader_Card_profile">
                    <Card_profile
                      avatar="  media/avatar/avatarBao.png"
                      name="Trần Thanh Bảo"
                      MSSV="18130017"
                      classes="DH18DTC"
                      linkWeb="https://baonlu.com"
                      facebook="https://www.facebook.com/thanhbao1122"
                      youtube="https://www.youtube.com/channel/UCeZIUE4l4PJREEXD5P7hoNg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 ">
              <div className="row">
                <div className="col-lg-6 col-sm-6 ">
                  <Card_profile
                    avatar="  media/avatar/avatarCuong.png"
                    name="Nguyễn Văn Cương"
                    MSSV="18130024"
                    classes="DH18DTC"
                    linkWeb="#"
                    facebook="https://www.facebook.com/tri.can.520"
                    youtube="https://www.youtube.com/"
                  />
                </div>
                <div className="col-lg-6 col-sm-6 ">
                  <Card_profile
                    avatar="  media/avatar/avatarDuong.png"
                    name="Lê Tuấn Dương"
                    MSSV="18130052"
                    classes="DH18DTA"
                    linkWeb=""
                    facebook="https://www.facebook.com/quen.lang.94214"
                    youtube="https://www.youtube.com/"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <Card_profile
                    avatar="  media/avatar/avatarNghia.png"
                    name="Hồ Quốc Nghĩa"
                    MSSV="18130150"
                    classes="DH18DTA"
                    linkWeb="#"
                    facebook="https://www.facebook.com/profile.php?id=100009998106031"
                    youtube="https://www.youtube.com/"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <Card_profile
                    avatar="  media/avatar/avatarHuan.jpg"
                    name="Võ Đoàn Minh Huân"
                    MSSV="18130089"
                    classes="DH18DTA"
                    linkWeb="#"
                    facebook="https://www.facebook.com/profile.php?id=100011287508032"
                    youtube="https://www.youtube.com/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
