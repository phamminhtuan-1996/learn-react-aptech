import {useState, useEffect} from 'react';
import product from '../api/product';
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png'
import styled from 'styled-components';
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
`;

export default function MainMenu() {
  const [isFixed, setFixed] = useState(false);
  const [listCate, setListCate] = useState([]);
  
  const fetchListCate = async () => {
    const body = {
      sort: 'createdAt:asc',
      filters: {},
    };
    const res = await product.listCate(body)
    console.log('fetchListCate', res.data);
    setListCate(res.data);
  }
  useEffect(() => {
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
          <Navbar.Brand href="/">
            <Image src={Logo}/>
          </Navbar.Brand>
          <Nav>
              <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
              {listCate.map((item, key) => (
                <Nav.Link key={key}> <Link to={`/category/${item.id}`}>{item.name}</Link></Nav.Link>
              ))}

          </Nav>
          <div className="list-button-navbar d-flex">
            <div className="navbar-heart me-2">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="navbar-cart position-relative me-2">
              <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <div className="total-cart position-absolute d-flex justify-content-center align-items-center rounded-circle">
                4
              </div>
            </div>
            <div className="navbar-user me-2">
            <i className="fa-regular fa-user"></i>
            </div>
            <div className="navbar-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
}
