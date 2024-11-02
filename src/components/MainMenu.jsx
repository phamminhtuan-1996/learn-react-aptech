import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import listFilm from '../api/film';

export default function MainMenu({emitIdGenre}) {
  const [listMainMenu, setMainMenu] = useState([])
  const fetchListMainMenu = async () => {
    const fetchData = await listFilm.getListMenu();
    setMainMenu(fetchData.genres.splice(0,10));
  }
  const handleGetListByID = (id) => {
    emitIdGenre(id);
  }
  useEffect(() => {
    fetchListMainMenu()
  }, [])
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
                <Nav.Link href='#home' onClick={() => handleGetListByID(-1)}>Home</Nav.Link>
                {listMainMenu.map((item, key) => (
                  <Nav.Link href={`#${item.id}`} key={key} onClick={() => handleGetListByID(item.id)}>{item.name}</Nav.Link>
                ))}
            </Nav>
        </Container>
      </Navbar>
    )
}