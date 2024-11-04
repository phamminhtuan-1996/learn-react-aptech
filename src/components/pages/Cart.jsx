import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import CartItem from "../CartItem";
export default function Cart() {
  const DivParent = styled.div``;
  return (
    <DivParent>
      <Container>
        <Row>
            <Col md={12}>
            <h3 className="text-center my-4">Giỏ Hàng</h3>
            </Col>
          <Col md={8}>
            <div className="cart-tile d-flex border-bottom mb-4">
              <div className="cart-tile__product w-75">
                <h4 className="text-black-50 fw-light">Sản Phẩm</h4>
              </div>
              <div className="cart-tile__quantity w-25">
                <h4 className="text-black-50 fw-light">Số lượng</h4>
              </div>
            </div>
            <CartItem />
            <CartItem />
          </Col>
          <Col md={4}>
            <div className="cart-total bg-body-secondary p-5">
                <div className="cart-total__title border-bottom pb-2">
                    <span>Đơn Hàng</span>
                </div>
                <div className="cart-total__total d-flex justify-content-between pt-4">
                    <span>5 Sản Phẩm</span>
                    <span>1,596,500₫</span>
                </div>
            </div>
            <Button className="btn-confirm w-100 mt-4">Thanh toán</Button>
          </Col>
        </Row>
      </Container>
    </DivParent>
  );
}
