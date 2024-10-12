import React from "react"
import SlideNews from './SlideNews'
import indo from '../img/tiep-vien-hang-khong-indo.mp4';
function NewsForYou({dataSlide = []}) {
    return (
        <div className="container">
            <div className="horizontal-line-grey"></div>
                <div className="news-for-you-wrap">
                    <div className="news-for-you">
                        <div className="news-for-you__title">
                            <div className="news-for-you__title--left">
                                <img src="https://static.mediacdn.vn/kenh14/web_images/box-recommend-icon.gif" alt="" />
                                <h3>Tin dành cho bạn</h3>
                            </div>
                            <div className="news-for-you__title--right">
                                <button>
                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                    <strong>Xem tin khác</strong>
                                </button>
                            </div>
                        </div>
                        <div className="slide-news-wrap">
                        <SlideNews data={dataSlide} />
                        </div>
                    </div>
                    <div className="new-for-you__left">
                        <video src={indo} controls></video>
                    </div>
                </div>
            <div className="horizontal-line-grey"></div>
        </div>
    )
}

export default NewsForYou;