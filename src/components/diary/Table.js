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
                            <th className="">Kết quả</th>
                            <th className="">Tự đánh giá</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                            <td>1</td>
                            <td>18130017</td>
                            <td>Trần Thanh Bảo</td>
                            <td>{this.props.congviecBao}</td>
                            <td>{this.props.ketquaBao}
                            </td>
                            <td>{this.props.danhGiaBao}</td>
                    </tr>
                    <tr>
                            <td>2</td>
                            <td>18130024</td>
                            <td>Nguyễn Văn Cương</td>
                            <td>{this.props.congviecCuong}</td>
                            <td>{this.props.ketquaCuong}
                            </td>
                            <td>{this.props.danhGiaCuong}</td>
                    </tr>
                    <tr>
                            <td>3</td>
                            <td>18130052</td>
                            <td>Lê Tuấn Dương</td>
                            <td>{this.props.congviecDuong}</td>
                            <td>{this.props.ketquaDuong}
                            </td>
                            <td>{this.props.danhGiaDuong}</td>
                    </tr>
                    <tr>
                            <td>4</td>
                            <td>18130150</td>
                            <td>Hồ Quốc Nghĩa</td>
                            <td>{this.props.congviecNghia}</td>
                            <td>{this.props.ketquaNghia}
                            </td>
                            <td>{this.props.danhGiaNghia}</td>
                    </tr>

                    <tr>
                            <td>5</td>
                            <td>18130089</td>
                            <td>Võ Đoàn Minh Huân</td>
                            <td>{this.props.congviecHuan}</td>
                            <td>{this.props.ketquaHuan}
                            </td>
                            <td>{this.props.danhGiaHuan}</td>
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