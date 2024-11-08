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
export default function WhiteList() {
  const param = useParams();
  const [nameCate, setNameCate] = useState('');
  const [checkParam, setCheckParam] = useState(param);
  const [listProduct, setListProduct] = useState([]);
  const getWhiteLis = () => {
    const getLocal = localStorage.getItem('whitelist');
    if (!getLocal) {
        return;
    }
    const result = JSON.parse(getLocal);
    setListProduct(result);
  }

  const handleRemoveWhiteList = (id) => {
    setListProduct(listProduct.filter((item) => item.id !== id));
  }
  
  useEffect(() => {
    getWhiteLis();
  }, [])
  useEffect(() => {
  }, [param])

  return (
    <DivParent>
      <Container>

        <h3 className="fw-light my-4 text-center">Wishlist</h3>
        {listProduct.length === 0 && (
            <h1 className="text-center">Chưa có sản phẩm nào</h1>
        )}
        <Row>
            
                {listProduct.map((item, key) => (
                    <Col md={3} key={key}>
                        <ProductItem data={item} isInPageWhiteList={true} removeItemInWhiteList={handleRemoveWhiteList}/>
                    </Col>
                ))}
           
        </Row>
      </Container>
    </DivParent>
  );
}
