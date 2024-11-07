import { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
export default function PartProductHome({ title, data = [] }) {
  return (
    <>
      {data.length > 0 && (
        <Row>
          <Col md={12}>
            <h3 className="product-home-title">{title}</h3>
          </Col>
          {data.map((item, index) => (
            <Col md={3} key={index}>
              <ProductItem data={item}/>
            </Col>
          ))}
        </Row>
      )}
      {data.length === 0 && (
        <Row>
          <Col md={12}>
            <h3 className="product-home-title">{title}</h3>
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
        </Row>
      )}
    </>
  );
}
