import React, { Component } from 'react';

class Technology extends Component {
    render() {
        return (
            <div >
                <div style={{ paddingTop: 80, paddingBottom: 0 }}>
                    <h1 className="text-center my-5 pb-2">Hướng dẫn deploy web bằng Firebase</h1>
                </div>

                <div className="container" >

                    <div className="col-md-10" >

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, paddingTop: 20 }}>
                                <b>Giới thiệu: </b>
                            </p>
                            <p>Firebase là một dịch vụ cơ sở dữ liệu thời gian thực được cung cấp bởi Google và hoạt động trên nền tảng đám mây. Nó giúp các lập trình phát triển nhanh các ứng dụng di động bằng cách đơn giản hóa các thao tác với cơ sở dữ liệu. Có nhiều dịch vụ cung cấp server cho website (microsoft azure, amazon AWS, google cloud platform, ...), website và các project của nhóm 1 được lưu trữ trên hosting của firebase bởi độ ổn định và tính bảo mật của nó cùng nhiều lợi ích khác (1GB lưu trữ miễn phí trên firebase storage, 10GB băng thông miễn phí mỗi tháng,...)</p>



                        </div>
                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, paddingTop: 20 }}>
                                <b>Chuẩn bị: </b>
                            </p>
                            <p>- Máy tính đã cài đặt firebase CLI</p>
                            <p>- Một tài khoản google</p>


                        </div>


                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, paddingTop: 20 }}>
                                <b>Bước 1: </b> Truy cập vào trang chủ Firebase, đăng nhập vào tài khoản Google.Nhấn vào <b>Get started</b>
                            </p>

                            <div style={{ paddingLeft: 11 }}>
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (27).png" width="900" height="500"></img>
                            </div>

                        </div>



                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 2: </b> Nhấn <b>Create a project</b>.
                                                </p>
                            <div style={{ paddingLeft: 11 }}>
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (28).png" width="900" height="500"></img>
                            </div>
                        </div>


                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 3: </b> Đặt tên cho project và nhấn <b>Continue ---> Create project</b>.
                                                </p>
                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (29).png" width="900" height="500" ></img>
                            </div>

                            <div style={{ paddingLeft: 11 }} >
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (30).png" width="900" height="500" ></img>
                            </div>


                        </div>


                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 4: </b> Để deploy web ta chọn vào biểu tượng web.
                                                </p>
                            <div style={{ paddingLeft: 11 }}>
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (31).png" width="900" height="500"></img>
                            </div>
                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 5: </b> Đặt tên cho web rồi nhấn <b>Register app</b>.
                                                </p>
                            <div style={{ paddingLeft: 11 }}>
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (32).png" width="900" height="500"></img>
                            </div>
                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 6: </b> Chọn <b>Hosting</b> trong phần <b>Develope</b> và nhấn <b>Get started</b>.
                                                </p>
                            <div style={{ paddingLeft: 11 }}>
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (34).png" width="900" height="500"></img>
                            </div>
                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify", paddingTop: 20 }}>
                                <b>Bước 7: </b> Sử dụng terminal để deploy.
                                                </p>
                        </div>
                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b>Bước 7.1: </b> Tải và cài đặt <b>Nodejs</b>.
                                                </p>
                        </div>
                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b>Bước 7.2: </b> Cài đặt Firebase CLI bằng câu lệnh.
                                                </p>
                            <div style={{ paddingLeft: 11 }} >
                                <p style={{ palignItems: 'center', backgroundColor: "silver", color: 'black' }}>npm install -g firebase-tools
</p>
                            </div>

                        </div>
                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b>Bước 7.3: </b> Tiếp theo nhập câu lệnh.
                                                </p>
                            <div style={{ paddingLeft: 11 }} >
                                <p style={{ palignItems: 'center', backgroundColor: "silver", color: 'black' }}>firebase init</p>
                            </div>
                            <p>Sau đó chọn Hosting và chọn project trên Firebase</p>
                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (39).png" width="900" height="500" ></img>
                            </div>



                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b>Bước 7.4: </b> Nhập các lệnh như trong hình.
                                                </p>
                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (40).png" width="900" height="500" ></img>
                            </div>
                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b>Bước 8: </b> Cuối cùng nhập câu lệnh.
                                                </p>
                            <div style={{ paddingLeft: 11 }} >
                                <p style={{ palignItems: 'center', backgroundColor: "silver", color: 'black' }}>firebase deploy</p>
                            </div>
                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/Screenshot (41).png" width="900" height="500" ></img>
                            </div>
                            <p>Sau khi nhập xong terminal sẽ hiển thị đường link đến trang web của bạn</p>

                        </div>

                        <div>
                            <p className="font-text" style={{ color: 'black', fontSize: 20, textAlign: "justify" }}>
                                <b> Chú ý: </b> Cách cấu hình hosting trước khi deploy
                                                </p>

                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/abcd123.png" width="900" height="500" ></img>
                            </div>
                            <p>Thêm thuộc tính trên vào file firebase.json để trỏ tất cả component của router về file index.html để tránh lỗi 404</p>

                            <div style={{ paddingBottom: 15, textAlign: "justify", paddingLeft: 11.5 }} >
                                <img style={{ border: "solid" }} src="media/technology/abcd456.png" width="900" height="500" ></img>
                            </div>
                            <p>Thêm thuộc tính trên vào file firebase.json để xóa cache của web trước khi deploy</p>

                        </div>


                    </div>

                </div>
            </div>
        );
    }
}


export default Technology;