import { Container, Breadcrumb, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
export default function ProductDetails() {
  const DivParent = styled.div`
        padding-top: 2rem;
        .list-color__item {
            width: 90px;
            height: 104px;
            margin-right: 1rem;
        }
        .list-color__item.active {
            width: 89px;
            border: 1px solid #D37171;
        }
        .list-color__item--title {
            // height: 88px;
            background-color: rgba(12, 5, 5, 0.6);
            display: flex;
            justify-content: center;
            bottom: 0;
            font-size: 11px;
        }
    `;
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
                    <div className="list-color__item active position-relative">
                        <Image className="w-100 h-100" src="https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9.jpg"/>
                        <div className="list-color__item--title w-100 position-absolute">
                            <span className="text-white">Trắng</span>
                        </div>
                    </div>
                    <div className="list-color__item position-relative">
                        <Image className="w-100 h-100" src="https://product.hstatic.net/1000197303/product/pro_den_3_b781fb7ce2d9494098fbdc002c6ea2a4.jpg"/>
                        <div className="list-color__item--title w-100 position-absolute">
                            <span className="text-white">Đen</span>
                        </div>
                    </div>
                    <div className="list-size">
                        
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </DivParent>
  );
}
