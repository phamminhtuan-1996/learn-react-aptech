import React from "react";
import {mainMenu} from '../data';
import BieuTrungKenh14 from '../img/bieu_trung_kenh_14.png';
import Fanpage from '../img/Screenshot 2024-08-17 at 11.45.13 AM.png';
function Footer() {
    return (
        <>
            <div className="main-menu main-menu-bottom">
                <div className="container">
                    <ul className="main-menu__list" type="none">
                        {mainMenu.map((item, index) => (
                            <li className="main-menu__list--item" key={index}><a href="">{item}</a></li>
                        ))}
                        
                        
                    </ul>
                </div>
            </div>
            <div className="footer">
                    <div className="container">
                        <div className="footer__header">
                            <div className="footer__header--left">
                                <div className="left-logo">
                                    <img src={BieuTrungKenh14} alt="" />
                                </div>
                                <div className="left-content">
                                    <h5>ĐÓNG GÓP NỘI DUNG</h5>
                                    <button className="left-content__question">
                                        <i className="fa fa-question-circle" aria-hidden="true"></i>
                                        câu hỏi thường gặp
                                    </button>
                                    <a href="email:bandoc@kenh14.vn">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        bandoc@kenh14.vn
                                    </a>
                                    <p>Kenh14.vn rất hoan nghênh độc giả gửi thông tin và góp ý cho chúng tôi.                        </p>
                                </div>
                            </div>
                            <div className="footer__header--right">
                                <img src={Fanpage} alt="" />
                            </div>
                        </div>
                        <div className="footer__list-info">
                            <div className="footer__list-info--item">
                                <div className="infor-item">
                                    <h5>trụ sở hà nội</h5>
                                    <p>Tầng 21, Tòa nhà Center Building, Hapulico Complex, số 1 Nguyễn Huy Tưởng, phường Thanh Xuân Trung, quận Thanh Xuân, Hà Nội. <br/>
                                        Điện thoại: 024 7309 5555, máy lẻ 62.370
                                    </p>
                                    <div className="infor-item__view-map">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <a href="">Xem bản đồ</a>
                                    </div>
                                </div>
                                <div className="infor-item">
                                    <h5>trụ sở tp.hồ chí minh</h5>
                                    <p>Tầng 4, Tòa nhà 123, số 127 Võ Văn Tần, phường 6, quận 3, TP. Hồ Chí Minh. <br/>
                                        Điện thoại: 028 7307 7979
                                    </p>
                                    <div className="infor-item__view-map">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <a href="">Xem bản đồ</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__list-info--item">
                                <div className="infor-item">
                                    <h5>chịu trách nhiệm quản lý nội dung</h5>
                                    <p>Bà Nguyễn Bích Minh </p>
                                </div>
                                <div className="infor-item">
                                    <h5>hợp tác truyền thông</h5>
                                    <span><i className="fa fa-phone" aria-hidden="true"></i> 024.73095555 (máy lẻ 62.370)</span>
                                    <div className="infor-item__view-map">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <a rel="nofollow" href="mailto:marketing@kenh14.vn" className="associate-mail">marketing@kenh14.vn</a>
                                    </div>
                                </div>
                                <div className="infor-item">
                                    <h5>liên hệ quảng cáo</h5>
                                    <span><i className="fa fa-phone" aria-hidden="true"></i> 02473007108</span>
                                    <div className="infor-item__view-map">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <a rel="nofollow" href="mailto:marketing@kenh14.vn" className="associate-mail">giaitrixahoi@admicro.vn</a>
                                    </div>
                                </div>
                                <button className="btn-chat"><i className="fa fa-comment" aria-hidden="true"></i> Chat với tư vấn viên</button>
                                <br/>
                                <button className="btn-view-details">Xem chi tiết</button>
                                <br/>
                                <a href=""><strong>Chính sách bảo mật</strong> </a>
                            </div>
                            <div className="footer__list-info--item">
                                <img src="https://kenh14cdn.com/web_images/vccorp-s.png" width="100" height="49" loading="lazy" alt="Vccorp" /> <br/>
                                <span>© Copyright 2007 - 2024 –</span> <strong>Công ty Cổ phần VCCorp</strong> <br/>
                                <div className="infor-item">
                                    <p>Tầng 17, 19, 20, 21 Tòa nhà Center Building - Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.</p>
                                    <p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 2215/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 10 tháng 4 năm 2019</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer;