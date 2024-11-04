import { useState } from "react";
import { Container, Breadcrumb, Row, Col, Image, ButtonGroup, Button, Accordion } from "react-bootstrap";
import TagVariantSize from "../TagVariantSize";
import TagVariantColor from "../TagVariantColor";
import Quantity from '../Quantity';
import PartProductHome from '../PartProductHome'
import styled from "styled-components";
export default function ProductDetails() {
  const listSize = ['S', 'M', 'L'];
  const listColor = [
    {
    title: 'Trắng',
    img: 'https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9.jpg',
    value: 'white'
  },
    {
    title: 'Đen',
    img: 'https://product.hstatic.net/1000197303/product/pro_den_3_b781fb7ce2d9494098fbdc002c6ea2a4.jpg',
    value: 'black'
  }
    ]
  const [valSize, setValSize] = useState('S');
  const [valColor, setValColor] = useState('white');
  const [valQuantity, setValQuantity] = useState(1);
  const DivParent = styled.div`
        padding-top: 2rem;
        .accordion-item {
            border-top: none;
            border-left: none;
            border-right: none;
            &:nth-child(2) {
                border: none;
            }
            .accordion-button {
                background-color: white;
                box-shadow:none;
            }
        }
        .des-product {
            font-size: 14px;
        }
        .product-home-title {
            text-align: center;
            margin: 1rem 0;
        }
    `
  return (
    <DivParent>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="text-decoration-none">
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Tổng quan sản phẩm</Breadcrumb.Item>
          <Breadcrumb.Item active>Váy</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-4">
            <Col md={6}>
                <Row>
                    <Col md={3}>
                        <Image className="mb-4" src="https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9_compact.jpg"/>
                        <Image className="mb-4" src="https://product.hstatic.net/1000197303/product/pro_trang_2_5cb36773438a450884f9b2b05293c693_compact.jpg"/>
                        <Image className="mb-4" src="https://product.hstatic.net/1000197303/product/pro_trang_3_11caaa799ce540e99e53219d1e6dbdb5_compact.jpg"/>
                        <Image src="https://product.hstatic.net/1000197303/product/pro_trang_4_127705d5e5de42c881051b3026de3faf_compact.jpg"/>
                    </Col>
                    <Col md={9}>
                        <Image className="w-100" src="https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9_master.jpg"/>
                    </Col>
                </Row>
            </Col>
            <Col md={6}>
                <h3 className="fw-light">Đầm midi thun sát nách form ôm in hình</h3>
                <div className="d-flex justify-content-between">
                    <span>SKU: CBQH074224STR</span>
                    <span className="text-black-50">Hiện tại còn 32 sản phẩm.</span>
                </div>
                <strong>416,500₫</strong> <small className="text-decoration-line-through text-black-50">595,000₫</small>
                <br/>
                <span className="my-2 d-block">Chọn màu</span>
                <div className="list-color d-flex">
                    {listColor.map((item, index) => (
                         <TagVariantColor
                            key={index}
                            title={item.title}
                            value={item.value}
                            img={item.img}
                            active={valColor === item.value}
                            emitSelected={setValColor}
                        />
                    ))}
                </div>
                <div className="list-size mt-4">
                    {listSize.map((item, index) => (
                        <TagVariantSize
                            key={index}
                            title={item}
                            value={item}
                            active={valSize === item}
                            className="me-2"
                            emitSelect={setValSize}
                        />
                    ))}
                    
                </div>
                <div className="d-flex mt-4">
                    <span className="me-2">Số lượng: </span>
                    <Quantity value={valQuantity} min="1" onChangeEvent={setValQuantity} />
                </div>
               <ButtonGroup className="w-100 mt-4">
                <Button className="btn-confirm-second w-50">Thêm vào giỏ hàng</Button>
                <Button className="btn-confirm w-50">Mua ngay</Button>
               </ButtonGroup>
               <Accordion defaultActiveKey={[]}  alwaysOpen className="mt-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Chi tiết sản phẩm</Accordion.Header>
                    <Accordion.Body>
                        <p className="des-product">
                            - Đầm midi thun sát nách form ôm in hình. <br/>
                            - Chất liệu thun sọc mềm, mịn, độ đàn hồi cao thoáng mát và thoải mái. <br/>
                            - Phù hợp mặc đi chơi, dạo phố, cà phê cuối tuần cùng bạn bè. <br/>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hướng dẫn bảo quản</Accordion.Header>
                    <Accordion.Body>
                        <p className="des-product">
                    - Giặt tay để tránh bay màu hoặc xù lông, ủi nhiệt độ bình thường. <br/>
                    - Không vắt hoặc xoắn mạnh vì điều này có thể gây ra các nếp nhăn và ảnh hưởng đến độ bền, cấu trúc của vải. <br/>
                    - Phơi, ủi mặt trái sản phẩm. <br/>
                    </p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        <PartProductHome title="Thường được mua cùng" />
      </Container>
    </DivParent>
  );
}
