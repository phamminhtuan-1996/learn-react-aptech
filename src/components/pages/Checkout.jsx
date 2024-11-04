import {Row, Col, Image, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../img/logo.png'

export default function Checkout() {
    const DivParent = styled.div`
      
    `
    return (
        <DivParent>
            <Container>
                <Row>
                    <Col md="6">
                        <Image src={logo} />
                    </Col>
                </Row>
            </Container>
        </DivParent>
    )
}