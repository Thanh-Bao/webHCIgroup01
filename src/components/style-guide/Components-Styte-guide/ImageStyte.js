import React, { Component } from 'react';

import { NavLink } from "react-router-dom";
import Card_profile from '../../about/Card_profile';


class Image extends Component {
    render() {
        return (
            <div>
                <h1>Icon</h1>
                <footer className="webintern-footer iconstyle">
                    <div className="empty-space marg-lg-b30" />
                    {/* TT-SOCAIL */}
                    <ul className="tt-socail">
                        <li><a href="https://www.facebook.com/groups/605810996700128"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                </footer>

                <div className="social-group mt-5">
                    {/* Web cá nhân Button */}
                    <a
                        href={this.props.linkWeb}
                        target="blank"
                    >
                        <div className="social-icon link">
                            <i className="fa fa-link" aria-hidden="true" />
                        </div>
                    </a>
                    {/* facebook  Button */}
                    <a
                        href={this.props.facebook}
                        target="blank"
                        className="social-margin"
                    >
                        <div className="social-icon facebook">
                            <i className="fab fa-facebook-f" aria-hidden="true" />
                        </div>
                    </a>
                    {/* Youtube Button */}
                    <a
                        href={this.props.youtube}
                        target="blank"
                        className="social-margin"
                    >
                        <div className="social-icon youtube">
                            <i className="fab fa-youtube" aria-hidden="true" />
                        </div>
                    </a>

                </div>
                <h1>Image</h1>
                <h5>1.Logo</h5>
                <img className="img1" src="media/styteGuide/100x30.PNG"></img>
                <h5>2.baner</h5>
                <img className="img2" src="media/styteGuide/Baner.PNG"></img>
                <h5>3.Image of member</h5>
                <img className="img3" src="media/styteGuide/850x450.PNG"></img>
                <h5>4.Image of member</h5>
                <img className="img4" src="media/styteGuide/150x150.PNG"></img>
                <h5>5.Image of Result</h5>
                <img className="img5" src="media/styteGuide/100x100.PNG"></img>
                <h5>6.Image of title</h5>
                <img className="img6" src="media/styteGuide/300x170.PNG"></img>
            </div >
        );
    }
}

export default Image;