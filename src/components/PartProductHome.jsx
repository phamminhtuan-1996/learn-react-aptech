import { Row, Col } from 'react-bootstrap';
import ProductItem from '../components/ProductItem';
export default function PartProductHome({ title, data }) {
    return (
        <Row>
            <Col md={12}>
                <h3 className='product-home-title'>{title}</h3>
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
    )
}