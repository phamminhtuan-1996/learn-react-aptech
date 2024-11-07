import { Row, Col, Card, Image } from "react-bootstrap";
import styled from "styled-components";
const DivParent = styled.div`
.total-quantity {
  width: 20px;
  height: 20px;
  color: white;
  top: -10%;
  right: -10%;
  border-radius: 50%;
  background-color: #0000008a;
}
.title-product-checkout, .price {
  font-size: 14px;
}
.title-variant {
  font-size: 12px;
}
`;
export default function ProductItemCheckout() {

  return (
    <DivParent className="mb-2">
      <Row>
        <Col md={2}>
          <Card className="px-2 postion-relative">
            <Image src="https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9_master.jpg" />
            <div className="total-quantity d-flex align-items-center justify-content-center position-absolute">
                4
            </div>
          </Card>
        </Col>
        <Col md={8}>
          <span className="title-product-checkout">Áo thun tay dài họa tiết cổ thuyền phối bèo đính nơ</span>
          <br />
          <small className="title-variant text-secondary">Hoa 01 / M</small>
        </Col>
        <Col md={2} className="price d-flex align-items-center">
            <span>1,180,000₫</span>
        </Col>
      </Row>
    </DivParent>
  );
}
