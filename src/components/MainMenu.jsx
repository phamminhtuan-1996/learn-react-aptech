import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from '../img/logo.png'
import styled from 'styled-components';


export default function MainMenu() {
  const StyledNavbar = styled.div`
  .nav-link {
    text-transform: uppercase;
    font-size: 15px;
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
`;
  return (
    <StyledNavbar>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo}/>
          </Navbar.Brand>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="category/1">SIGNATURE</Nav.Link>
              <Nav.Link href="category/1">BACK IN STOCK</Nav.Link>
              <Nav.Link href="category/1">Áo kiểu</Nav.Link>
              <Nav.Link href="category/1">Áo thun</Nav.Link>
              <Nav.Link href="category/1">Đầm</Nav.Link>
              <Nav.Link href="category/1">Quần</Nav.Link>
              <Nav.Link href="category/1">váy</Nav.Link>
          </Nav>
          <div className="list-button-navbar d-flex">
            <div className="navbar-heart me-2">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="navbar-cart me-2">
              <i className="fa-solid fa-cart-shopping"></i>
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
