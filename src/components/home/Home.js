import React, { Component } from "react";
import "./Home/styte.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="cont">
          <div className="mouse" />
          <div className="app">
            <div className="app__bgimg">
              <div className="app__bgimg-image app__bgimg-image--1"></div>
              <div className="app__bgimg-image app__bgimg-image--2"></div>
            </div>
            <div className="app__img">
              <img
                onmousedown="return false"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png"
                alt="city"
              />
            </div>
            <div className="app__text app__text--1">
              <div className="app__text-line app__text-line--4">Welcome </div>
              <div className="app__text-line app__text-line--3">
                HCI_Group_01
              </div>
              <div className="app__text-line app__text-line--2"></div>
              <div className="app__text-line app__text-line--1">Năm 2020</div>
            </div>
            <div className="app__text app__text--2">
              <div className="app__text-line app__text-line--4"></div>
              <div className="app__text-line app__text-line--3"></div>
              <button className="app__text-line app__text-line--3 bubbly-button" src="#">Project Nhóm 1</button>
              <div className="app__text-line app__text-line--2"></div>
              <div className="app__text-line app__text-line--1">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="pages">
            <ul className="pages__list">
              <li
                data-target={1}
                className="pages__item pages__item--1 page__item-active"
              />
              <li data-target={2} className="pages__item pages__item--2" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
