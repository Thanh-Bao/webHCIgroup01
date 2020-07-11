import React, { Component } from 'react';

class FileAndDirectory extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <strong className="strong-styte">File And Directory</strong>
                    <h5>Menu project:</h5>
                    <div>
                        <img className="menu-styte"  src="media/styteGuide/menuProject.jpg"></img>
                    </div>
                    <h5>Menu web group 01:</h5>
                    <div>
                        <img className="menu-styte"  src="media/styteGuide/menuWeb.jpg"></img>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img className="img-file" src="media/styteGuide/menuPublic.PNG"></img>
                        </div>
                        <div class="col">
                            <img className="img-file" src="media/styteGuide/menuSrc.PNG"></img>
                        </div>
                        <div class="col">
                            <img className="img-file" src="media/styteGuide/menuSrc2.PNG"></img>
                        </div>
                        <div class="col">
                            <img className="img-file" src="media/styteGuide/menuSrcCSS.PNG"></img>
                        </div>
                    </div>


                </div>
                <h1>File Design</h1>
                <img className="img-design" src="media/styteGuide/FileDesign1.jpg"></img>
                <img className="img-design" src="media/styteGuide/FileDesign2.jpg"></img>

            </div>
        );
    }
}

export default FileAndDirectory;