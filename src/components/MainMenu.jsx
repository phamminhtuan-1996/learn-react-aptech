import { useState, useEffect } from "react";
import listFilm from "../api/film";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function MainMenu({ emitIdGenre, emitShowModalListViewed }) {
  const [listMainMenu, setMainMenu] = useState([]);
  const fetchListMainMenu = async () => {
    const fetchData = await listFilm.getListMenu();
    setMainMenu(fetchData.genres.splice(0, 9));
  };
  const handleGetListByID = (id) => {
    emitIdGenre(id);
  };
  useEffect(() => {
    fetchListMainMenu();
  }, []);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleGetListByID(-1)}
          >
            Home
          </Nav.Link>
          {listMainMenu.map((item, key) => (
            <Nav.Link
              className="d-flex justify-content-center align-items-center"
              href={`#${item.id}`}
              key={key}
              onClick={() => handleGetListByID(item.id)}
            >
              {item.name}
            </Nav.Link>
          ))}
          <Nav.Link>
            <Button variant="info" onClick={() => emitShowModalListViewed(true)}>Phim Đã xem</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
