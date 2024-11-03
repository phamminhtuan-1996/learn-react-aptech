import styled from "styled-components";
import { Col, Row, Image, Container } from "react-bootstrap";
import Logo from "../img/logo.png";
import ZaloLogo from "../svg/ZaloLogo";
export default function Footer() {
  const DivParent = styled.footer`
    .footer-logo {
      height: 33px;
    }
    .footer-logo-bct {
      height: 44px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin-right: 1rem;
    }
    p,
    .footer-policy {
      font-size: 12px;
    }
    .footer-policy {
      font-style: italic;
    }
    .footer-list li {
      font-size: 15px;
      margin-bottom: 11px;
    }
    h3 {
        font-size: 22px;
        font-weight: 400;
    }
  `;
  return (
    <Container className="my-4">
      <DivParent>
        <Row>
            <Col md={12} className="p-0">
                <Image src={Logo} className="footer-logo" />
            </Col>
          <Col md={4}>
            <div className="d-flex justify-content-between align-items-center">
              <Image
                src="https://theme.hstatic.net/1000197303/1001046599/14/logo_bct.png?v=9978"
                className="footer-logo-bct"
              />
              <ul className="d-flex align-items-center">
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-tiktok"></i>
                </li>
                <li>
                  <ZaloLogo />
                </li>
              </ul>
            </div>
            <p className="mt-2">
              Thương hiệu thời trang MARC - CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI
              NÉT VIỆT Địa chỉ: Tầng 15.06 Tòa nhà Văn phòng Golden King, Số 15
              Nguyễn Lương Bằng, Phường Tân Phú, Quận 7, Tp. HCM
            </p>
            <ul className="footer-policy">
              <li>Chính sách bảo mật</li>
              <li>Các điều khoản và điều kiện</li>
            </ul>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <h3>Về chúng tôi</h3>
                <ul class="footer-list">
                  <li>Giới thiệu MARC</li>
                  <li>Tuyển dụng</li>
                  <li>Cảm hứng thời trang</li>
                  <li>Danh sách cửa hàng</li>
                  <li>Nhượng quyền thương hiệu</li>
                  <li>Khách hàng thân thiết</li>
                  <li>Chính sách giao hàng</li>
                  <li>Chính sách bảo hành</li>
                </ul>
              </Col>
              <Col md={4}>
                <h3>Hỗ trợ khách hàng</h3>
                <ul class="footer-list">
                  <li>Liên hệ đến MARC</li>
                  <li>Câu hỏi thường gặp</li>
                  <li>Hướng dẫn tạo tài khoản</li>
                  <li>Hướng dẫn đặt hàng</li>
                  <li>Mua Online nhận tại cửa hàng</li>
                  <li>Hướng dẫn mua trước trả sau</li>
                  <li>Quy định và hướng dẫn đổi/trả hàng</li>
                  <li>Hướng dẫn đánh giá sản phẩm</li>
                  <li>Hướng dẫn xem và đổi thưởng</li>
                </ul>
              </Col>
              <Col md={4}>
                <h3>Liên lạc</h3>
                <div class="footer-phone">
                    <p class="footer-phone-title m-0">Đặt hàng trực tuyến (8h-21h)</p>
                    <a class="footer-phone-number text-decoration-none" href="tel:1900 636942">
                        <span>1900 636942</span>
                    </a>
                    <p class="footer-phone-title m-0">Chăm sóc khách hàng</p>
                    <a class="footer-phone-number text-decoration-none" href="tel:1900 636940">
                        <span>1900 636940</span>
                    </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </DivParent>
    </Container>
  );
}
