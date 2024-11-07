
import { useEffect, useState } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { urlIMG } from '../api/constant';
import product from '../api/product';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const DivParent = styled.div`
        
img {
    width: 150px;
}
h4 {
    font-weight: 300;
}
a {
    text-decoration: none;
    color: black;
}
`
export default function ListCategory() {

    const param = useParams();
    const [listCate, setListCate] = useState([]);
    const fetchListCate = async () => {
        const body = {
          sort: 'createdAt:asc',
          filters: {},
          populate: '*'
        };
        const res = await product.listCate(body)
        console.log('fetchListCate', res.data);
        setListCate(res.data);
      }
    
    useEffect(() => {
        fetchListCate();
    }, [])
    useEffect(() => {
        fetchListCate();
    }, [param])

    return (
        <DivParent>
            <Row>
                {listCate.map((item, index) => (
                    <Col key={index}>
                        <Link to={`/category/${item.id}`} className="d-flex flex-column align-items-center"> 
                            <Image src={urlIMG + item.thumbnail.url}/>
                            <h4 className='text-center mt-2'>{item.name}</h4>
                        </Link>
                    </Col>
                ))}
            </Row>
        </DivParent>
    )
}