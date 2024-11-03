import {Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
export default function ListCategory() {
    const listCate = [
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category1-img.png?v=9978', name: "SIGNATURE", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category2-img.png?v=9978', name: "Back in stock", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category3-img.png?v=9978', name: "Áo kiểu", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category4-img.png?v=9978', name: "Áo thun", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category5-img.png?v=9978', name: "Đầm", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category6-img.png?v=9978', name: "Quần", id: -1 },
        {img: 'https://theme.hstatic.net/1000197303/1001046599/14/category7-img.png?v=9978', name: "Váy", id: -1 },
    ]
    const DivParent = styled.div`
        
        img {
            width: 150px;
        }
        h4 {
            font-weight: 300;
        }
    `
    return (
        <DivParent>
            <Row>
                {listCate.map((item, index) => (
                    <Col key={index}>
                        <Image src={item.img}/>
                        <h4 className='text-center mt-2'>{item.name}</h4>
                    </Col>
                ))}
            </Row>
        </DivParent>
    )
}