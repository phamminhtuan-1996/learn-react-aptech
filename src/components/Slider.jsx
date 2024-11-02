import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Slider() {
  return (
    <div className="carousel-head">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://aptechvietnam.com.vn/wp-content/uploads/Banner-PC-7.jpg"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://aptechvietnam.com.vn/wp-content/uploads/Banner-PC-2-1.png"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://aptechvietnam.com.vn/wp-content/uploads/png-01-1652-x-667.jpg"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
