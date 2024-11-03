import { Container, Breadcrumb, Row, Col, Pagination } from "react-bootstrap";
import styled from "styled-components";
import ListCategory from '../ListCategory';
import ProductItem from "../ProductItem";
export default function Category() {
  const DivParent = styled.div`
        padding: 2rem;
  `;
  return (
    <DivParent>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="text-decoration-none">
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Váy
          </Breadcrumb.Item>
        </Breadcrumb>
        <ListCategory/>
        <h3 className="fw-light my-4">Váy</h3>
        <Row>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
            <Col md={3}>
                <ProductItem/>
            </Col>
        </Row>
        <div className="mt-4 d-flex justify-content-center">
        <Pagination>
            <Pagination.Item  active={true}>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
        </Pagination>
        </div>
        
      </Container>
    </DivParent>
  );
}
