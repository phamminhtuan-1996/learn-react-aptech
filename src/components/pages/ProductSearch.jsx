import { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import {topFunction} from '../../utils/helper';
import product from '../../api/product';
import styled from "styled-components";
import ProductItem from "../ProductItem";
const DivParent = styled.div`
  min-height: 500px;
  padding-top: 2rem;
`;
export default function ProductSearch() {
  const [valSearch, setValSearch] = useState("");
  const [listProduct, setListProduct] = useState([]);
  const fetchProductSearch = async () => {
    const body = {
      sort: "createdAt:asc",
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        product_name: {
            $contains: valSearch
        },
        category_product : {
          name: {
            $contains: valSearch
          }
        }
      },
      field: ["product_name", "price", "thumbnail", "promotion_price"],
      populate: "thumbnail",
    };
    product.listProductGeneral(body).then((res) => {
      setListProduct(res.data);
    });
  };

  useEffect(() => {
    const deboundId = setTimeout(() => {
        if (valSearch === '') {
            setListProduct([]);
            return;
        }
        fetchProductSearch();
    }, 1000)
    return () => {
     clearTimeout(deboundId)
    }
  }, [valSearch]);
  useEffect(() => {
    topFunction();
  }, [])
  return (
    <DivParent>
      <Container>
        {/* <form> */}
          <Form.Control
            value={valSearch}
            placeholder="Nhập vào sản phẩm muốn tiền kiếm"
            className="rounded-pill mb-4"
            onChange={(e) => setValSearch(e.target.value)}
          ></Form.Control>
        {/* </form> */}

        {listProduct.length === 0 && (
            <h4 className="text-center my-4">Vui lòng nhập từ khoá vào ô tìm kiếm để tìm sản phẩm mong muốn</h4>
        )}

        <Row>
          {listProduct.map((item, key) => (
            <Col md={3}>
              <ProductItem data={item} key={key} />
            </Col>
          ))}
        </Row>
      </Container>
    </DivParent>
  );
}
