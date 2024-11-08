import { Row, Col, Card, Image } from "react-bootstrap";
import {formatNumberThoundSand} from '../utils/helper';
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
export default function ProductItemCheckout({data = {}, className=""}) {

  return (
    <DivParent className={`mb-2 ${className}`}>
      <Row>
        <Col md={2}>
          <Card className="px-2 postion-relative">
            <Image src={data.thumbnail} />
            <div className="total-quantity d-flex align-items-center justify-content-center position-absolute">
               {data.quantity}
            </div>
          </Card>
        </Col>
        <Col md={8}>
          <span className="title-product-checkout">{data.product_name}</span>
          <br />
          <small className="title-variant text-secondary">{data.name_variant} / {data.size}</small>
        </Col>
        <Col md={2} className="price d-flex align-items-center">
            <span>{formatNumberThoundSand(data.price * data.quantity)}₫</span>
        </Col>
      </Row>
    </DivParent>
  );
}
