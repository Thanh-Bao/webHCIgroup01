import React, { Component } from 'react';


class Table extends Component {
    render() {
        return (
            <div className="space-table">
                <h3 className="text-center"><b>{this.props.week}</b></h3>
                <div className="table-responsive space-week-table text-center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" data-toggle="tooltip" title="Số thứ tự">STT</th>
                            <th className="text-center" data-toggle="tooltip" title="Mã số sinh viên">MSSV</th>
                            <th className="text-center">Họ và tên</th>
                            <th className="text-center">Công việc được giao</th>
                            <th className="text-center">Kết quả</th>
                            <th className="text-center">Tiến độ</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                            <td>1</td>
                            <td>18130017</td>
                            <td>Trần Thanh Bảo</td>
                            <td>{this.props.congviecBao}</td>
                            <td>
                                {this.props.ketquaBao}
                            </td>
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>2</td>
                            <td>18130024</td>
                            <td>Nguyễn Văn Cương</td>
                            <td>{this.props.congviecCuong}</td>
                            <td>
                                {this.props.ketquaCuong}
                            </td>
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>3</td>
                            <td>18130052</td>
                            <td>Lê Tuấn Dương</td>
                            <td>{this.props.congviecDuong}</td>
                            <td>
                                {this.props.ketquaDuong}
                            </td>
                            <td>Hoàn thành</td>
                    </tr>
                    <tr>
                            <td>4</td>
                            <td>18130150</td>
                            <td>Hồ Quốc Nghĩa</td>
                            <td>{this.props.congviecNghia}</td>
                            <td>
                                {this.props.ketquaNghia}
                            </td>
                            <td>Hoàn thành</td>
                    </tr>

                    <tr>
                            <td>5</td>
                            <td>18130089</td>
                            <td>Võ Đoàn Minh Huân</td>
                            <td>{this.props.congviecHuan}</td>
                            <td>
                                {this.props.ketquaHuan}
                            </td>
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