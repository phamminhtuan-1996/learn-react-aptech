import { useEffect, useState } from "react";
import { Container, Button, Form, Row } from "react-bootstrap";
import product from '../../api/product';
import styled from "styled-components";
import ProductItem from "../ProductItem";
const DivParent = styled.div`
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
        product_name: valSearch,
      },
      field: ["product_name", "price", "thumbnail", "promotion_price"],
      populate: "thumbnail",
    };
    product.listProductGeneral(body).then((res) => {
      setListProduct(res.data);
    });
  };

  useEffect(() => {
    console.log("valSearch", valSearch);
    if (valSearch === "") {
        setListProduct([]);
        return;
    }
    fetchProductSearch();
  }, [valSearch]);
  return (
    <DivParent>
      <Container>
        <form>
          <Form.Control
            value={valSearch}
            placeholder="Nhập vào sản phẩm muốn tiền kiếm"
            className="rounded-pill mb-4"
            onChange={(e) => setValSearch(e.target.value)}
          ></Form.Control>
        </form>
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
