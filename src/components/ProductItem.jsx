import {useEffect, useState, useContext} from 'react';
import {urlIMG} from '../api/constant'
import {formatNumberThoundSand} from '../utils/helper';
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from '../utils/AppContext';
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
.fa-heart {
  color: #ffff;
  font-size: 14px;
}
.product-percent {
    width: 50px;
    height: 50px;
    background-image: url('https://theme.hstatic.net/1000197303/1001046599/14/tag-sale.png?v=9976');
    background-size: cover;
    color: white;
    &.not-promotion {
      color: transparent;
      background-image: unset
    }
}
.product-whitelist i {
    color: #D37171;
}
.product-whitelist button {
    border-radius: 50%;
}
`;
export default function ProductItem({data = {}, isInPageWhiteList = false, removeItemInWhiteList}) {
  const {updateWhiteList, setUpdateWhiteList} = useContext(Context);
  const [isWhiteList, setWhiteList] = useState(false);
  const imgLinkDefault = 'https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
  const addWhiteList = () => {
    let getLocal = localStorage.getItem('whitelist');
    let result = [];
    if (!getLocal) {
      localStorage.setItem('whitelist', JSON.stringify([data]));
      return;
    }
    result = JSON.parse(getLocal);
    result.push(data);
    localStorage.setItem('whitelist', JSON.stringify(result));
  }
  const removeWhitelist = () => {
    let getLocal = localStorage.getItem('whitelist');
    if (!getLocal) {
      return;
    }
    const result = JSON.parse(getLocal);
    localStorage.setItem('whitelist', JSON.stringify(result.filter((item) => item.id !== data.id)));
  }
  const handleSaveWhiteList = () => {
      if (isInPageWhiteList) {
        removeItemInWhiteList(data.id);
      }
      if (!isWhiteList) {
        addWhiteList();
        setWhiteList(true);
        setUpdateWhiteList(!updateWhiteList);
        return;
      }
      removeWhitelist();
      setWhiteList(false);
      setUpdateWhiteList(!updateWhiteList);
  }
  const checkWhiteList = () => {
    let getLocal = localStorage.getItem('whitelist');
    if (!getLocal) {
      return;
    }
    let getWhiteList =  JSON.parse(getLocal);
    const findWhitelist = getWhiteList.find((item) => item.id === data.id);
    setWhiteList(findWhitelist ? true : false);
  }
  const calculateDiscountPercentage = (promotionPrice, originalPrice) => {
    if (originalPrice <= 0 || promotionPrice < 0 || promotionPrice > originalPrice) {
      return 0;
    }
    
    const discountPercentage = ((originalPrice - promotionPrice) / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  }
  useEffect(() => {
    checkWhiteList();
  })
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
        <small className="text-decoration-line-through">{data?.promotion_price ? formatNumberThoundSand(data.promotion_price) + '₫': ""}</small>
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
        <div className={`product-percent d-flex justify-content-center align-items-center ${data?.promotion_price ? "" : 'not-promotion'}`}>
          -
        {data?.promotion_price && (
          calculateDiscountPercentage(Number(data.price), Number(data.promotion_price)).replace('.00', "")
        )}%
        </div>
        <div className="product-whitelist">
            <Button variant="light" className="m-2" onClick={handleSaveWhiteList}>
                {isWhiteList && (
                  <i className="fa-solid fa-heart"></i>
                )}
                  {!isWhiteList && (
                    <i className="fa-regular fa-heart"></i>
                  )}
            </Button>
        </div>
      </div>
    </DivParent>
  );
}
