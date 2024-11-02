import { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import {Row, Col, Container} from "react-bootstrap";
import listFilm from '../api/film';

export default function GroupFilmSearch({keySearch = ''}) {
    const [listFilmFilter, setListFilmFilter] = useState([])

    const getListFilmByQuery = async () => {
        const fetchData = await listFilm.searchListByKey(keySearch);
        console.log('getListFilmByQuery', fetchData)
        setListFilmFilter(fetchData.results)
    }

    useEffect(() => {
        if (keySearch  === '') {
            return;
        }
        getListFilmByQuery();
    }, [keySearch]);

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