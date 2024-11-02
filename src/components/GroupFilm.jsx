import { useState, useEffect } from "react";
import {Button, Container, Row, Col} from 'react-bootstrap';
import FilmItem from "./FilmItem";

import listFilm from '../api/film';

export default function GroupFilm({ titleGroup = "Phim sắp chiếu", type = "" }) {
    const [dataListGroup, setDataListGroup ] = useState([])
    const getListFilm = async () => {
        const dataFetch = await listFilm.getListCate(type);
        setDataListGroup(dataFetch.results.splice(0,8));
    }
    useEffect(() => {
        getListFilm();
    }, [])
    return (
    <Container>
      <Button variant="secondary" size="lg" className="mt-4 mb-2">{titleGroup}</Button>
      <Row>
        {dataListGroup.length > 0 && dataListGroup.map((item, index) => (
             <Col xs={6} md={3} key={index}>
                <FilmItem data={item}/>
            </Col>
        ))}
       
      </Row>
    </Container>
  );
}
