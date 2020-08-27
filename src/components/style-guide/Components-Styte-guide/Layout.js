import React, { Component } from 'react';



class Layout extends Component {
    render() {
        return (
            <div className="container">
              <div className="space-table">
            <h3 className="text-center"><b>{this.props.week}</b></h3>
            <div>
            <h1>Button</h1>
            <div>
                  <a
                    href="https://group01-tintucbatdongsan.tk"
                    target="_blank"
                    style={{ "text-decoration": "none", fontWeight: "bold" }}
                  >
                    <div className="btnProject">
                      <span>Project</span>
                      <div className="dot"></div>
                    </div>
                  </a>
                  <button className= "buttonStyle bt1">Login button</button>
                  <button className= "buttonStyle bt2">Large button </button>
                  <button className= "buttonStyle bt3"> Button</button>
                  <button className= "buttonStyle bt4">Small </button>
                  <button className= "buttonStyle bt5">Default button</button>

                </div>
            </div>
            <h1>Table</h1>
            <div className="table-responsive space-week-table ">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="" data-toggle="tooltip" title="Số thứ tự">STT</th>
                        <th className="" data-toggle="tooltip" title="Mã số sinh viên">MSSV</th>
                        <th className="">Họ và tên</th>
                        <th className="">Công việc được giao</th>
                        <th className="">Kết quả</th>
                        <th className="">Tự đánh giá</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                </tr>
            </tbody>

            </table>
            <hr className="size-hr"/>
            
            </div>
           
          
          
        </div>  
        
               

            </div>
        );
    }
}

export default Layout;