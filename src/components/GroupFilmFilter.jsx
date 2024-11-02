import { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import {Row, Col, Container} from "react-bootstrap";
import listFilm from '../api/film';

export default function GroupFilmFilter({genreId}) {
    const [listFilmFilter, setListFilmFilter] = useState([])

    const getListFilmByGenreId = async () => {
        const fetchData = await listFilm.getListByGenreId(genreId);
        console.log(fetchData)
        setListFilmFilter(fetchData.results)
    }

    useEffect(() => {
        if (genreId < 0) {
            return;
        }
        getListFilmByGenreId();
    }, [genreId]);

    return (
        <Container>
            <Row>
                {listFilmFilter.length > 0 && listFilmFilter.map((item, index) => (
                    <Col xs={6} md={3} key={index}>
                        <FilmItem data={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}