import {useState, useEffect, useContext} from 'react';
import product from '../api/product';
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png'
import styled from 'styled-components';
import { Context } from '../utils/AppContext';
const StyledNavbar = styled.div`
height: 57px;
.nav-link {
  text-transform: uppercase;
  font-size: 15px;
  a {
    text-decoration: none;
    color: black;
  }
}
.navbar {
  background-color: white !important;
}
.navbar-brand img {
  width: 123px;
}
.list-button-navbar {
  i {
    font-size: 24px;
  }
}
.list-button-navbar {
  a {
    color: black;
  }
}
.total-cart {
  top: -10px;
  right: -10px;
  background-color: #D37171;
  width: 20px;
  height: 20px;
  color:white;
  font-size: 12px;
}
.total-whitelist {
  top: -10px;
  right: -10px;
  background-color: #D37171;
  width: 20px;
  height: 20px;
  color:white;
  font-size: 12px;
}
`;

export default function MainMenu() {
  const [isFixed, setFixed] = useState(false);
  const [listCate, setListCate] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalWhitelist, setTotalWhitelist] = useState(0);
  const {updateCart, updateWhiteList} = useContext(Context);
  
  const fetchListCate = async () => {
    const body = {
      sort: 'createdAt:asc',
    };
    const res = await product.listCate(body)
    setListCate(res.data);
  }
  const getTotalCart = () => {
    const getTotalCart = localStorage.getItem('list-cart');
    if (!getTotalCart) {
      return;
    }
    const totalNumber = JSON.parse(getTotalCart);
    let total = 0;
    totalNumber.forEach((item) => {
      total += item.quantity;
    })
    setTotalCart(total);
  }
  const getTotalWhitelist = () => {
    const getTotalCart = localStorage.getItem('whitelist');
    if (!getTotalCart) {
      return;
    }
    const totalNumber = JSON.parse(getTotalCart);
    setTotalWhitelist(totalNumber.length);
  }
  useEffect(() => {
    getTotalCart();
  }, [updateCart])

  useEffect(() => {
    getTotalWhitelist();
  }, [updateWhiteList])
  
  useEffect(() => {
    getTotalWhitelist();
    getTotalCart();
    fetchListCate();
  }, [])

useEffect(() => {
  document.addEventListener('scroll', function(e) {
    const position = window.scrollY;
    if (position > 57) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  })
}, [])
  return (
    <StyledNavbar>
      <Navbar expand="lg" bg="light" className={`${isFixed ? "fixed-top" : ""}`}>
        <Container>
          <Link to='/' className='navbar-brand'>
            <Image src={Logo}/>
          </Link>
          <Nav>
               <Link className='nav-link' to='/'>Home</Link> 
              {listCate.map((item, key) => (
                <Link className='nav-link' key={key} to={`/category/${item.id}`}>{item.name}</Link>
              ))}
          </Nav>
          <div className="list-button-navbar d-flex">
            <div className="navbar-heart position-relative me-2">
              <Link to="/whitelist">
              <i className="fa-regular fa-heart"></i>
              </Link>
              <div className="total-whitelist position-absolute d-flex justify-content-center align-items-center rounded-circle">
                {totalWhitelist}
              </div>
            </div>
            <div className="navbar-cart position-relative me-2">
              <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <div className="total-cart position-absolute d-flex justify-content-center align-items-center rounded-circle">
                {totalCart}
              </div>
            </div>
            <div className="navbar-user me-2">
              <Link to='/login'>
                <i className="fa-regular fa-user"></i>
              </Link>
            </div>
            <div className="navbar-search">
              <Link to="/search">
              <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
}
