import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-center textcolor"><b>{this.props.hinhanh}</b></h3>
                    <img className="centerImage" src={this.props.image} alt =""/>
                </div>
            </div>
        );
    }
}

export default Image;