import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import {formatNumberThoundSand} from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Context } from "../../utils/AppContext";
import styled from "styled-components";
import CartItem from "../CartItem";
const DivParent = styled.div``;
export default function Cart() {
  const navigate = useNavigate();
  const [listCart, setListCard] = useState([]);
  const [totalQuanityCart, setTotalQuantityCard] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {updateCart, setUpdateCart} = useContext(Context);
  const handleRemoveItem = (id) => {
    const updatedListCart = listCart.filter((item) => item.id_variant !== id);
    setListCard([]);
    localStorage.setItem('list-cart', JSON.stringify(updatedListCart))
    setTimeout(() => {
      setListCard(updatedListCart)
      setUpdateCart(!updateCart);
      updateTotalCart();
     }, 200)
  }
  const handleRedirectCheckout = () => {
    navigate('/checkout');
  }
  const updateTotalCart = () => {
    const getListCart = localStorage.getItem('list-cart');
    if (!getListCart) {
      return;
    }
    const listcartd = JSON.parse(getListCart);
    let total = 0;
    let totalPrice = 0;
    listcartd.forEach((item) => {
      total += item.quantity;
      totalPrice += item.price * item.quantity;
    })
    setTotalPrice(totalPrice);
    setTotalQuantityCard(total) 
    setListCard(listcartd);
    setUpdateCart(!updateCart)
  }
  const handleSetQuantity = (val) => {
   const deboundId = setTimeout(() => {
    setUpdateCart(!updateCart);
    updateTotalCart();
   }, 500)
   return () => {
    clearTimeout(deboundId);
   }
  }
  useEffect(() => {
    console.log('listCart useEffect',listCart);
  }, [listCart])
  useEffect(() => {
    updateTotalCart();
  }, [])
  return (
    <DivParent>
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="text-center my-4">Giỏ Hàng</h3>
          </Col>
          {listCart.length === 0 && (
             <Col md={8} className="d-flex flex-column align-items-center">
              <Image className="w-75" src="https://theme.hstatic.net/1000197303/1001046599/14/empty-cart-desktop.png?v=10006"/>
              <span className="text-center">Giỏ hàng của bạn đang trống <br/> Hãy thêm sản phẩm vào giỏ nhé!</span>
              <Link to='/'>
                <Button className="btn-confirm-second rounded-pill mt-4">Mua sắm ngay</Button>
              </Link>
            </Col>
          )}
          {listCart.length > 0 && (
          <Col md={8}>
            <div className="cart-tile d-flex border-bottom mb-4">
              <div className="cart-tile__product w-75">
                <h4 className="text-black-50 fw-light">Sản Phẩm</h4>
              </div>
              <div className="cart-tile__quantity w-25">
                <h4 className="text-black-50 fw-light">Số lượng</h4>
              </div>
            </div>
            {listCart.map((item, key) => (
              <CartItem data={item} key={key} remoItem={handleRemoveItem} changeQuantity={handleSetQuantity}/>
            ))}
            {/* <CartItem /> */}
          </Col>
          )}
          <Col md={4}>
            <div className="cart-total bg-body-secondary p-5">
                <div className="cart-total__title border-bottom pb-2">
                    <span>Đơn Hàng</span>
                </div>
                <div className="cart-total__total d-flex justify-content-between pt-4">
                    <span>{totalQuanityCart} Sản Phẩm</span>
                    <span>{formatNumberThoundSand(totalPrice)}₫</span>
                </div>
            </div>
            <Button className="btn-confirm w-100 mt-4" disabled={listCart.length === 0} onClick={handleRedirectCheckout}>Thanh toán</Button>
          </Col>
        </Row>
      </Container>
    </DivParent>
  );
}
