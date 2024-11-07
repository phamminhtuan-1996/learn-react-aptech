import { useState, useEffect } from "react";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Accordion,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getImgStrapi, formatNumberThoundSand } from "../../utils/helper";
import product from "../../api/product";
import TagVariantSize from "../TagVariantSize";
import TagVariantColor from "../TagVariantColor";
import Quantity from "../Quantity";
import PartProductHome from "../PartProductHome";
import styled from "styled-components";
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
    box-shadow: none;
  }
}
.des-product {
  font-size: 14px;
}
.product-home-title {
  text-align: center;
  margin: 1rem 0;
}
.img-item {
  cursor: pointer;
  &.active {
    border: 1px solid #d37171;
  }
}
`;
export default function ProductDetails() {

  const param = useParams();
  const listSize = ["S", "M", "L"];
  const [valSize, setValSize] = useState("S");
  const [valColor, setValColor] = useState("white");
  const [valQuantity, setValQuantity] = useState(1);
  const [listColor, setListColor] = useState([]);
  const [listImg, setListImg] = useState([]);
  const [listProductByCate, setListProductByCate] = useState([]);
  const [dataProduct, setDataProduct] = useState({});
  const [imgTarget, setImgTarget] = useState(
    "https://product.hstatic.net/1000197303/product/pro_trang_1_cf82f79ade3247ea9614f98e08a714a9_master.jpg"
  );
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const fetchProductGeneral = async () => {
    const body = {
      sort: "createdAt:desc",
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        id: param.product_id,
      },
      populate: "*",
    };
    product.listProductGeneral(body).then((res) => {
      console.log("fetchProductGeneral", res);
    setDataProduct(res.data[0]);
    fetchProductByCateId(res.data[0].category_product.id);
    setImgTarget(getImgStrapi(res.data[0].thumbnail))
    });
  };
  const fetchProductByCateId = async (id) => {
    const body = {
        sort: 'createdAt:desc',
        pagination: {
          start: 0,
          limit: 10,
        },
        filters: {
            category_product: {
                id:  id,
            }
        },
        field: ['product_name', 'price', 'thumbnail', 'promotion_price'],
        populate: 'thumbnail'
      };
    product.listProductGeneral(body).then((res) => {
        console.log('fetchProductGeneral', res);
        setListProductByCate(res.data);
    })
}
  const fetchProductVariant = async () => {
    setListImg([]);
    const body = {
      sort: "createdAt:asc",
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        products_parents: {
          id: param.product_id,
        },
      },
      field: ["list_img", "color_name", "thumbnail"],
      populate: "*",
    };
    const res = await product.getProductVariant(body);
    console.log("fetchProductVariant", res);
    setListColor(res.data);
  };
  const handleSetColor = (val) => {
    setValColor(val);
    const listIMG = listColor
      .find((item) => item.id === val)
      .list_img.reverse();
    setListImg(listIMG);
    setImgTarget(
      getImgStrapi(listColor.find((item) => item.id === val).thumbnail, "large")
    );
  };

  const handleAddtoCart = () => {
    let getListProductCart = localStorage.getItem('list-cart');
    if (!getListProductCart) {
       localStorage.setItem('list-cart', []);
       getListProductCart = localStorage.getItem('list-cart')
    }
    console.log('getListProductCart', getListProductCart)
    let result = getListProductCart.length > 0 ? JSON.parse(getListProductCart) : [];
    console.log('before' , result);
    const indexHavedResult = result.findIndex((item) => item.id_variant === valColor);
    if (indexHavedResult > -1) {
      result[indexHavedResult].quantity = result[indexHavedResult].quantity + Number(valQuantity);
      localStorage.setItem('list-cart', JSON.stringify(result));
      return;
    }
    const data = {
      idProduct: dataProduct.id,
      product_name: dataProduct.product_name,
      quantity: Number(valQuantity),
      name_variant: listColor.find((item) => item.id === valColor).color_name,
      id_variant: valColor,
      thumbnail: getImgStrapi(listColor.find((item) => item.id === valColor).thumbnail)
    }
    result = [data, ...result];
    localStorage.setItem('list-cart', JSON.stringify(result));
    console.log('handleAddtoCart', data, 'result', result);
  }
  useEffect(() => {
    if (listColor.length === 0) {
      return;
    }
    handleSetColor(listColor[0].id);
  }, [listColor]);
  useEffect(() => {
    fetchProductGeneral();
    fetchProductVariant();
    topFunction();
  }, []);
  useEffect(() => {
    fetchProductGeneral();
    fetchProductVariant();
    topFunction();
  }, [param]);

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
                {listImg.map((item, index) => (
                  <Image
                    className={`img-item mb-4 ${
                      imgTarget === getImgStrapi(item, "large") ? "active" : ""
                    }`}
                    key={index}
                    src={getImgStrapi(item, "thumbnail")}
                    onClick={() => setImgTarget(getImgStrapi(item, "large"))}
                  />
                ))}
                {/* <Image className="mb-4" src="https://product.hstatic.net/1000197303/product/pro_trang_2_5cb36773438a450884f9b2b05293c693_compact.jpg"/>
                        <Image className="mb-4" src="https://product.hstatic.net/1000197303/product/pro_trang_3_11caaa799ce540e99e53219d1e6dbdb5_compact.jpg"/>
                        <Image src="https://product.hstatic.net/1000197303/product/pro_trang_4_127705d5e5de42c881051b3026de3faf_compact.jpg"/> */}
              </Col>
              <Col md={9}>
                <Image className="w-100" src={imgTarget} />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h3 className="fw-light">{dataProduct.product_name}</h3>
            <div className="d-flex justify-content-between">
              <span>SKU: {dataProduct.sku}</span>
              <span className="text-black-50">Hiện tại còn 32 sản phẩm.</span>
            </div>
            <strong>{formatNumberThoundSand(dataProduct.price)}₫</strong>{" "}
            <small className="text-decoration-line-through text-black-50">
              {formatNumberThoundSand(dataProduct.promotion_price)}₫
            </small>
            <br />
            <span className="my-2 d-block">Chọn màu</span>
            <div className="list-color d-flex">
              {listColor.length === 0 && <h4 className="text-danger">Hết hàng</h4>}
              {listColor.map((item, index) => (
                <TagVariantColor
                  key={index}
                  title={item.color_name}
                  value={item.id}
                  img={getImgStrapi(item.thumbnail, "thumbnail")}
                  active={valColor === item.id}
                  emitSelected={handleSetColor}
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
              <Quantity
                value={valQuantity}
                min="1"
                onChangeEvent={setValQuantity}
              />
            </div>
            <ButtonGroup className="w-100 mt-4">
              <Button
                disabled={listColor.length === 0}
                className="btn-confirm-second w-50"
                onClick={handleAddtoCart}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button disabled={listColor.length === 0} className="btn-confirm w-50">Mua ngay</Button>
            </ButtonGroup>
            <Accordion defaultActiveKey={[]} alwaysOpen className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Chi tiết sản phẩm</Accordion.Header>
                <Accordion.Body>
                  <p className="des-product">
                    - Đầm midi thun sát nách form ôm in hình. <br />
                    - Chất liệu thun sọc mềm, mịn, độ đàn hồi cao thoáng mát và
                    thoải mái. <br />
                    - Phù hợp mặc đi chơi, dạo phố, cà phê cuối tuần cùng bạn
                    bè. <br />
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Hướng dẫn bảo quản</Accordion.Header>
                <Accordion.Body>
                  <p className="des-product">
                    - Giặt tay để tránh bay màu hoặc xù lông, ủi nhiệt độ bình
                    thường. <br />
                    - Không vắt hoặc xoắn mạnh vì điều này có thể gây ra các nếp
                    nhăn và ảnh hưởng đến độ bền, cấu trúc của vải. <br />
                    - Phơi, ủi mặt trái sản phẩm. <br />
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <PartProductHome title="Thường được mua cùng" data={listProductByCate}/>
      </Container>
    </DivParent>
  );
}
