import { Container, Breadcrumb, Row, Col, Pagination } from "react-bootstrap";
import styled from "styled-components";
import ListCategory from '../ListCategory';
import ProductItem from "../ProductItem";
export default function Category() {
  const DivParent = styled.div`
        padding: 2rem;
        .breadcrumb-item a{
            text-decoration: none;
            color: #2C2C2C;
        }
        .breadcrumb-item.active {
            color: #777;
        }
        .page-link {
            color: black;
        }
        .active .page-link {
            color: white;
            background-color: black;
        }
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
