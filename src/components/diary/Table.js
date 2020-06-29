import React, { Component } from 'react';


class Table extends Component {
    render() {
        return (
            <div className="space-table">
                <h3 className="text-center"><b>{this.props.week}</b></h3>
                <div className="table-responsive space-week-table ">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="" data-toggle="tooltip" title="Số thứ tự">STT</th>
                            <th className="" data-toggle="tooltip" title="Mã số sinh viên">MSSV</th>
                            <th className="">Họ và tên</th>
                            <th className="">Công việc được giao</th>
                            <th className="">Tiến độ</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                            <td>1</td>
                            <td>18130017</td>
                            <td>Trần Thanh Bảo</td>
                            <td>{this.props.congviecBao}</td>
                            
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>2</td>
                            <td>18130024</td>
                            <td>Nguyễn Văn Cương</td>
                            <td>{this.props.congviecCuong}</td>
                           
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>3</td>
                            <td>18130052</td>
                            <td>Lê Tuấn Dương</td>
                            <td>{this.props.congviecDuong}</td>
                          
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>4</td>
                            <td>18130150</td>
                            <td>Hồ Quốc Nghĩa</td>
                            <td>{this.props.congviecNghia}</td>
                            
                            <td>Hoàn thành</td>
                    </tr>

                    <tr>
                            <td>5</td>
                            <td>18130089</td>
                            <td>Võ Đoàn Minh Huân</td>
                            <td>{this.props.congviecHuan}</td>
                         
                            <td>Hoàn thành</td>
                    </tr>
                </tbody>

                </table>
                <hr className="size-hr"/>
                
                </div>
               
              
              
            </div>
        );
    }
}

export default Table;