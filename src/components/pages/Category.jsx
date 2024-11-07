import { useEffect, useState } from "react";
import { Container, Breadcrumb, Row, Col, Pagination } from "react-bootstrap";
import product from '../../api/product';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import ListCategory from '../ListCategory';
import ProductItem from "../ProductItem";
const DivParent = styled.div`
  padding: 2rem;
`;
export default function Category() {
  const param = useParams();
  const [nameCate, setNameCate] = useState('');
  const [checkParam, setCheckParam] = useState(param);
  const [listProduct, setListProduct] = useState([]);
  const fetchProductGeneral = async () => {
    const body = {
        sort: 'createdAt:asc',
        pagination: {
          start: 0,
          limit: 10,
        },
        filters: {
            category_product: {
                id:  param.category_id
            }
        },
        field: ['product_name', 'price', 'thumbnail', 'promotion_price'],
        populate: 'thumbnail'
      };
    product.listProductGeneral(body).then((res) => {
        console.log('fetchProductGeneral', res);
        setListProduct(res.data);
    })
}
  const fetchListCate = async () => {
    const body = {
      sort: 'createdAt:asc',
      filters: {
        id: param.category_id
      },
      populate: '*'
    };
    const res = await product.listCate(body)
    console.log('fetchListCate in my head', res.data[0].name);
    setNameCate(res.data[0].name)
  }
  useEffect(() => {
    fetchListCate();
    fetchProductGeneral();
  }, [])
  useEffect(() => {
    if (checkParam === param) {
      return;
    }
    fetchListCate();
    fetchProductGeneral();
  }, [param])

  return (
    <DivParent>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="text-decoration-none">
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {nameCate}
          </Breadcrumb.Item>
        </Breadcrumb>
        <ListCategory/>
        <h3 className="fw-light my-4">{nameCate}</h3>
        {listProduct.length === 0 && (
            <h1 className="text-center">Chưa có sản phẩm nào</h1>
        )}
        <Row>
            
                {listProduct.map((item, key) => (
                    <Col md={3}>
                        <ProductItem data={item} key={key}/>
                    </Col>
                ))}
           
        </Row>
        
        <div className="mt-4 d-flex justify-content-center">
        {/* <Pagination>
            <Pagination.Item  active={true}>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
        </Pagination> */}
        </div>
        
      </Container>
    </DivParent>
  );
}
