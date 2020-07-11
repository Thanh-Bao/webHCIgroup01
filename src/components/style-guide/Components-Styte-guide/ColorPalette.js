import React, { Component } from 'react';

class ColorPalette extends Component {
    render() {
        return (
            <div className="container">
                <strong className="strong-styte">Primary Colors</strong>
                {/* <div className="swatch-preview"> #34eb13</div>
                <div>#0ebeb0</div> */}
                <div>
                    <ul className="list-no-bullets">
                        <li className="swatch">
                            <span className="swatch-preview" style={{ backgroundColor: '#34eb13' }} />
                            <ul className="list-no-bullets swatch-details">
                                <li><strong>CfA green</strong></li>
                                <li>#34eb13</li>
                            </ul>
                        </li>
                        <li className="swatch">
                            <span className="swatch-preview" style={{ backgroundColor: '#3c465c' }} />
                            <ul className="list-no-bullets swatch-details">
                                <li><strong>CfA Blue</strong></li>
                                <li>#3c465c</li>
                            </ul>
                        </li><li className="swatch">
                            <span className="swatch-preview" style={{ backgroundColor: '#6D6E71' }} />
                            <ul className="list-no-bullets swatch-details">
                                <li><strong>CfA Gray</strong></li>
                                <li>#6D6E71</li>
                            </ul>
                        </li>
                        <li className="swatch">
                            <span className="swatch-preview" style={{ backgroundColor: '#000' }} />
                            <ul className="list-no-bullets swatch-details">
                                <li><strong>CfA Black</strong></li>
                                <li>#000000</li>
                            </ul>
                        </li>
                    </ul>



                </div>
                <div>
                    <strong className="strong-styte">Colors text</strong>
                    <div style={{ color: '#007bff' }}>Color text hover :#007bff</div>
                    <div style={{ color: '#212121' }}>Color text #212121</div>
                    {/* <div style={{ color: '#f90809' }}>#f90809</div> */}
                </div>

            </div>
        );
    }
}

export default ColorPalette;