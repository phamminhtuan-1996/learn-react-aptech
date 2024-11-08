import {Card, Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import checkout from '../../api/checkout';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import {formatNumberThoundSand} from '../../utils/helper';
import ProductItemCheckout from "../ProductItemCheckout";

const DivParent = styled.div`
    padding: 1rem;
    .fa-circle-check {
        font-size: 100px;
    }
    .product-success {
        margin-bottom: 1rem!important;
        .total-quantity {
            top: -5%;
            right: -5%;
        }
    }
    hr:last-child {
        display: none;
    }
    .title-product-checkout {
        font-size: 20px;
    }
    .title-variant {
        font-size: 14px;
    }
`;

export default function PageSuccess() {
    const param = useParams();
    const [dataInfo, setDataInfo] = useState({});
    const [total, setTotal] = useState(0);
    const fetchDataTransaction = async () => {
        const res = await checkout.getTransactionDetails(param.id_transaction)
        console.log('fetchDataTransaction', res);
        let total = 0;
        console.log(res.data);
        res.data.list_product.forEach((item) => {
            total = total + Number(item.price);
        })
        setTotal(total)
        setDataInfo(res.data);
    }
    useEffect(() => {
        fetchDataTransaction();
    }, [])
    return (
        <DivParent>
            <h1 className='text-center'>
                <i className="fa-solid fa-circle-check text-success text-center"></i>
            </h1>
            <h1 className='text-center my-4'>Cảm ơn vì đã đặt hàng</h1>
            <p className='text-dark-50 text-center'>
                Tôi biết các bạn có rất nhiều sự lựa chọn. Cảm ơn vì đã chọn chúng tôi. đơn hàng của bạn sẽ được giao trong vòng 5-7 ngày.
            </p>
            <Container>
                <Row className='mb-4'>
                    <Col md={6}>
                        <Card className='p-4'>
                            <Card.Title>
                                Thông tin của bạn.
                            </Card.Title>
                            <Card.Body>
                                <strong>Tên:</strong> <span>{dataInfo?.name_customer}</span><br/>
                                <strong>Số điện thoại:</strong> <span>{dataInfo?.phone}</span><br/>
                                <strong>email:</strong> <span>{dataInfo?.email}</span><br/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                    <Card className='p-4 h-100'>
                            <Card.Title>
                                Địa chỉ của bạn:
                            </Card.Title>
                            <Card.Body>
                                <span>{dataInfo?.address}</span>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Card className='p-4 my-4'>
                    <Card.Title>Tổng cộng:</Card.Title>
                    <Card.Body>
                        <h4>{formatNumberThoundSand(total)}₫</h4>
                    </Card.Body>
                </Card>
                <Card className='p-4'>
                    <Card.Title>Tóm tắt đơn hàng:</Card.Title>
                    <Card.Body>
                        {dataInfo?.list_product && dataInfo.list_product.map((item, key) => (
                            <>
                                <ProductItemCheckout key={key} data={item} className="product-success" />
                                <hr />
                            </>
                        ))}
                    </Card.Body>
                </Card>
               
            </Container>
        </DivParent>
    )
}