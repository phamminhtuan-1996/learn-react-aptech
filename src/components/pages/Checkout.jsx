import {
  Row,
  Col,
  Image,
  Container,
  Breadcrumb,
  Form,
  Accordion,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import SelectForm from "../../components/SelectForm";
import ProductItemCheckout from "../ProductItemCheckout";

export default function Checkout() {
  const DivParent = styled.div`
    padding: 56px;
    height: 100vh;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: block;
      width: 50%;
      height: 100%;
      background-color: #fffdfa;
      z-index: -1;
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      display: block;
      width: 50%;
      height: 100%;
      background-color: #fafafa;
      border-left: 1px solid #e1e1e1;
      z-index: -1;
    }
    .logo {
      height: 54px;
    }
    .home a {
      color: #338dbc !important;
    }
    .form-control {
      height: 52px;
    }
    .accordion-button {
      &::after {
        display: none;
      }
    }
    .accordion-button.collapsed {
      background-color: white;
    }
    .accordion-button {
      background-color: white;
    }
    .accordion-body {
      background-color: #fafafa;
    }
    .form-check-input {
        border-color: black;
    }
    .form-check-label {
        color: black!important;
    }
    .btn-use-voucher {
        background-color: #c8c8c8;
        border-color: #c8c8c8;
        transition: 1s;
        &:hover {
            background-color: black;
        }
    }
    .label-bill {
        font-size: 14px;
    }
    .title-program {
        font-size: 18px;
    }
  `;
  return (
    <DivParent className="position-relative">
      <Container>
        <Row>
          <Col md="6" className="px-4">
            <Image
              className="logo"
              src="https://file.hstatic.net/1000197303/file/logo_0caef1aea53f4b6281978ef2546b486b.png"
            />
            <Breadcrumb className="mt-4">
              <Breadcrumb.Item className="home" href="/cart">
                Giỏ Hàng
              </Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Thông tin giao hàng
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Phương thức thanh toán</Breadcrumb.Item>
            </Breadcrumb>
            <h5 className="fw-light">Thông tin giao hàng</h5>
            <form action="">
              <Row>
                <Col md={12}>
                  <Form.Control
                    type="text"
                    placeholder="Họ và tên"
                    className="mb-4"
                  />
                </Col>
                <Col md={8}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col md={4}>
                  <Form.Control type="text" placeholder="Số điện thoại" />
                </Col>
              </Row>
            </form>

            <Accordion defaultActiveKey="0" className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Giao tận nơi</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Địa Chỉ"
                        className="mb-4"
                      />
                    </Col>
                    <Col md={4}>
                      <SelectForm title="Chọn Tỉnh / Thành" />
                    </Col>
                    <Col md={4}>
                      <SelectForm title="Quận / Huyện" />
                    </Col>
                    <Col md={4}>
                      <SelectForm title="Phường / Xã" />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Nhận tại cửa hàng</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check type="radio" id="address-1">
                      <Form.Check.Input type="radio" isValid />
                      <Form.Check.Label>
                        {" "}
                        <strong>MARC AEON MALL TÂN PHÚ: </strong> 30 Bờ Bao Tân
                        Thắng, P. Sơn Kì, Q. Tân Phú, Quận Tân Phú, Hồ Chí Minh
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" id="address-2">
                      <Form.Check.Input type="radio" isValid />
                      <Form.Check.Label>
                        {" "}
                        <strong>MARC AEON MALL BÌNH TÂN: </strong> Số 1 đường số
                        17A, KP 11, P. Bình Trị Đông B, Q. Bình Tân, Quận Bình
                        Tân, Hồ Chí Minh
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" id="address-3">
                      <Form.Check.Input type="radio" isValid />
                      <Form.Check.Label>
                        {" "}
                        <strong> MARC PARC MALL: </strong> Quận 8, Quận 8, Hồ
                        Chí Minh
                      </Form.Check.Label>
                    </Form.Check>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-end mt-4">
            <Button className="btn-confirm w-50">Thanh Toán</Button>
            </div>
          </Col>
          <Col md={6} className="px-4">
           <ProductItemCheckout/>
           <ProductItemCheckout/>
           <ProductItemCheckout/>
           <hr />
           <Row>
            <Col md={9}>
                <Form.Control placeholder="Mã giảm giá" />
            </Col>
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <Button className="btn-use-voucher" variant="dark" size="lg">Sử dụng</Button>
            </Col>
           </Row>
           <hr />
           <Row>
            <Col md={9} className="d-flex align-items-center">
                <span className="title-program">Chương trình khách hàng thân thiết</span>
            </Col>
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <Button variant="dark" size="lg">Sử dụng</Button>
            </Col>
           </Row>
           <hr />
           <Row>
            <Col md={6}>
                <span className="label-bill fw-light">Tạm tính</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
                <span className="value-bill ">2,070,000₫</span>
            </Col>
            <Col md={6}>
                <span className="label-bill fw-light">Phí vận chuyển</span>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
                <span className="value-bill fw-light">__</span>
            </Col>
           </Row>
           <hr />
            <Row>
                <Col md={6}>
                    <span>Tổng cộng</span>
                </Col>
                <Col md={6} className="d-flex justify-content-end align-items-center">
                    <small className="fw-light d-block  me-1">VND</small>
                    <strong>2,070,000₫</strong>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </DivParent>
  );
}
