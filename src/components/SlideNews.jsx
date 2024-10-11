import React, { useRef }  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideNews({data = [], className=""}) {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const handlePrev = () => {
        sliderRef.current.slickPrev();
    }

    const handleNext = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className={`slide-news-wrap ${className}`}>
            <Slider {...settings} ref={sliderRef} className="slide-news news-top-slide">
                {data && data.map((item, index) => (
                    <div className="slide-news__item" key={index}>
                        <div className="slide-news__item--img"> 
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <h5 className="slide-news__item--title">
                            {item.title}
                        </h5>
                    </div>
                ))}
                
            </Slider>
            <button className="btn-prev" onClick={handlePrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
            <button className="btn-next" onClick={handleNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    )
}

export default SlideNews;