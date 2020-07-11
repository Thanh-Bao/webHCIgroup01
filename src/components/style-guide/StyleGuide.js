import React, { Component } from "react";
import { TabList, Tabs, TabPanel } from "react-tabs";

import Table from "../diary/Table";

import Layout from "./Components-Styte-guide/Layout"
import Typography from "./Components-Styte-guide/Typography"
import ColorPalette from "./Components-Styte-guide/ColorPalette";
import ImageStyte from "./Components-Styte-guide/ImageStyte";
import FileAndDirectory from "./Components-Styte-guide/FileAndDirectory"


class StyleGuide extends Component {
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
                  className="nav-item nav-link active size-tabs-styte"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#layout"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <b>Layout</b>
                </a>

                <a
                  className="nav-item nav-link size-tabs-styte"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#typography"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <b>Typography</b>
                </a>

                <a
                  className="nav-item nav-link size-tabs-styte"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#colorPalette"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b>Color Palette</b>
                </a>

                <a
                  className="nav-item nav-link size-tabs-styte"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#imageStyte"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b> Image Styte</b>
                </a>

                <a
                  className="nav-item nav-link size-tabs-styte"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#fileAndDirectory"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <b>File and Directory</b>
                </a>
              </div>
            </nav>
            {/* Tab panes */}
            <div className="tab-content">
              {/* Layout */}
              <div id="layout" className="container tab-pane active">
                <br />
                <Layout></Layout>
              </div>

              {/* Typography */}
              <div id="typography" className="container tab-pane fade">
                <br />
                <Typography></Typography>
              </div>

              {/* Color Palette */}
              <div id="colorPalette" className="container tab-pane fade">
                <br />
                <ColorPalette></ColorPalette>
              </div>

              {/* image */}
              <div id="imageStyte" className="container tab-pane fade">
                <br />
                <ImageStyte></ImageStyte>
              </div>

              {/* File and Directory */}
              <div id="fileAndDirectory" className="container tab-pane fade">
                <br />
                <FileAndDirectory></FileAndDirectory>
              </div>


            </div>{" "}
          </div>
        </div>
      </div>

    );
  }
}

export default StyleGuide;
