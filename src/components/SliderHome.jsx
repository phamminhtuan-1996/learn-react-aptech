import { Carousel, Image } from "react-bootstrap";
import styled from "styled-components";

export default function SliderHome() {
  const DivParent = styled.div`
    img {
        width: 100%;
        height: 500px;
    }
    .carousel-indicators button {
        width: 14px;
        height: 14px;
        border: 1px solid #D37171;
        border-radius: 100%;
        background-color: transparent;
    }
    .carousel-indicators button.active {
        background-color: #D37171;
     }
     .fa-solid {
        font-size: 20px;
        color: black;
     }
     .carousel-control-prev, .carousel-control-next {
        text-decoration: none;
     }
  `;
  return (
    <DivParent>
      <Carousel prevIcon={<i className="fa-solid fa-arrow-left"></i>} nextIcon={<i className="fa-solid fa-arrow-right"></i>}>
        <Carousel.Item>
          <Image src="https://theme.hstatic.net/1000197303/1001046599/14/slideshow_1.jpg?v=9978" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://theme.hstatic.net/1000197303/1001046599/14/slideshow_2.jpg?v=9978" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://theme.hstatic.net/1000197303/1001046599/14/slideshow_3.jpg?v=9978" />
        </Carousel.Item>
      </Carousel>
    </DivParent>
  );
}
