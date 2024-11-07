import { Row, Col, Image, Button } from "react-bootstrap";
import styled from "styled-components";
const DivParent = styled.div`
margin-top: 1rem;
img {
    height: 250px;
    object-fit: contain;
}
button {
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50%;
}
i {
    color: #D37171;
}
`;

export default function Collection() {

  return (
    <DivParent>
      <Row>
        <Col md={12}>
          <h3>MARC và nàng</h3>
          <span className="d-block my-4">@marcfashionvn #marconme</span>
        </Col>
        <Col md={3} className="position-relative">
          <Image className="w-100" src="https://theme.hstatic.net/1000197303/1001046599/14/marconme-image-1.jpg?v=9978" />
          <Button className="position-absolute" variant="light">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </Col>
        <Col md={3} className="position-relative">
          <Image className="w-100" src="https://theme.hstatic.net/1000197303/1001046599/14/marconme-image-2.jpg?v=9978" />
          <Button className="position-absolute" variant="light">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </Col>
        <Col md={3} className="position-relative">
          <Image className="w-100" src="https://theme.hstatic.net/1000197303/1001046599/14/marconme-image-3.jpg?v=9978" />
          <Button className="position-absolute" variant="light">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </Col>
        <Col md={3} className="position-relative">
          <Image className="w-100" src="https://theme.hstatic.net/1000197303/1001046599/14/marconme-image-5.jpg?v=9978" />
          <Button className="position-absolute" variant="light">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </Col>
      </Row>
    </DivParent>
  );
}
