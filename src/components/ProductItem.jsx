import {urlIMG} from '../api/constant'
import {formatNumberThoundSand} from '../utils/helper';
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
const DivParent = styled.div`
position: relative;
margin-bottom: 1rem;
.product-top-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.product-img img {
  height: 420px;
}
a {
  font-size: 20px;
  text-decoration: none;
  color: black;
}
.product-color__item {
  width: 22px;
  height: 22px;
  // border: 1px solid #E2E2E2;
  border-radius: 100%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-color__item--child {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.fa-solid {
  color: #ffff;
  font-size: 12px;
}
.product-percent {
    width: 50px;
    height: 50px;
    background-image: url('https://theme.hstatic.net/1000197303/1001046599/14/tag-sale.png?v=9976');
    background-size: cover;
    color: white;
}
.product-whitelist i {
    color: #D37171;
}
.product-whitelist button {
    border-radius: 50%;
}
`;
export default function ProductItem({data = {}}) {

  // console.log(data)
  const imgLinkDefault = 'https://product.hstatic.net/1000197303/product/pro_da_01_2_fbab52be715148d6b4f8f88c82825e2b_grande.jpg';
  
  return (
    <DivParent>
      <Link to={`/product/${data.id}`}>
        <div className="product-img">
          <Image src={ data?.thumbnail ? urlIMG + data.thumbnail.url : imgLinkDefault} />
        </div>
        <span className="mt-4 fw-light b-lock">
          
          {data?.product_name ? data?.product_name : "Áo kiểu sơ mi tay dài thắt nơ"}
        </span>
      </Link>
      <div className="product-price my-1">
        <span className="text-danger me-2">{data?.price ? formatNumberThoundSand(data.price) + '₫' : "248,500₫"}</span>
        <small className="text-decoration-line-through">{data?.promotion_price ? formatNumberThoundSand(data.promotion_price) + '₫': "350,500₫"}</small>
      </div>
      <div className="product-color d-flex">
        <div
          className="product-color__item border"
          style={{ backgroundColor: "#FFFFFF" }}
        ></div>
        <div
          className="product-color__item border"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div
            className="product-color__item--child"
            style={{ backgroundColor: "#BBAE47" }}
          ></div>
        </div>
        <div
          className="product-color__item border"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div
            className="product-color__item--child"
            style={{ backgroundColor: "#DBC1BA" }}
          ></div>
        </div>
        <div
          className="product-color__item border"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div
            className="product-color__item--child"
            style={{ backgroundColor: "#C8A095" }}
          ></div>
        </div>
        <div
          className="product-color__item border"
          style={{ backgroundColor: "black" }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div className="product-top-bar d-flex justify-content-between">
        <div className="product-percent d-flex justify-content-center align-items-center">-30%</div>
        <div className="product-whitelist">
            <Button variant="light" className="m-2">
                <i className="fa-regular fa-heart"></i>
            </Button>
        </div>
      </div>
    </DivParent>
  );
}