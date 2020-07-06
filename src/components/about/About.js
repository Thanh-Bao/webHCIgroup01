import React, { Component } from "react";
import Card_profile from "./Card_profile";
import "../../CSS/about/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>
        {/**<div className="container">
              <nav aria-label="breadcrumb">
                 <ol className="breadcrumb ">
                  <li className="breadcrumb-item "><a href="https://hci2020group01.tk/home" className="color-bread thea"><strong>Home</strong></a></li>
                   <li className="breadcrumb-item active color-bread" aria-current="page">About</li>
                 </ol>
             </nav>
    </div>**/}

        <h1 className="text-center my-5 pb-2">ĐỘI NGŨ PHÁT TRIỂN WEBSITE</h1>
     

        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card_profile
                avatar="  media/avatar/avatarHuan.jpg"
                name="Võ Đoàn Minh Huân"
                MSSV="18130089"
                classes="DH18DTA"
                linkWeb="https://minhhuan.tk"
                facebook="https://www.facebook.com/profile.php?id=100011287508032"
                youtube="https://www.youtube.com/channel/UCol6-1rM-vyFYbbG2fdj3_A"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card_profile
                avatar="  media/avatar/avatarDuong.png"
                name="Lê Tuấn Dương"
                MSSV="18130052"
                classes="DH18DTA"
                linkWeb="http://tuanduongnlu.tk/"
                facebook="https://www.facebook.com/quen.lang.94214"
                youtube="https://www.youtube.com/"
              />
            </div>
          </div>
       

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card_profile
              avatar="  media/avatar/avatarNghia.png"
              name="Hồ Quốc Nghĩa"
              MSSV="18130150"
              classes="DH18DTA"
              linkWeb="http://qunghianlu.tk"
              facebook="https://www.facebook.com/profile.php?id=100009998106031"
              youtube="https://www.youtube.com/channel/UCCvNE-Xd8TuSyLK4TpFRB9g"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card_profile
              avatar="  media/avatar/avatarCuong.png"
              name="Nguyễn Văn Cương"
              MSSV="18130024"
              classes="DH18DTC"
              linkWeb="https://cuongnguyennlu.tk/"
              facebook="https://www.facebook.com/tri.can.520"
              youtube="https://www.youtube.com/"
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
