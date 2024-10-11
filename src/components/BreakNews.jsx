import React from "react";
import NewsItemHorizontal from "./NewsItemHorizontal";

function BreakNews({dataBreakNews = [], dataZoneNews = []}) {
    return (
        <div className="container">
            <div className="horizontal-line-grey"></div>
            <div className="break-news-wrap">
                <div className="break-news">
                    <div className="break-news__title"><h4>ĐÁNG CHÚ Ý</h4></div>
                    <div className="break-news__list">
                        {dataBreakNews && dataBreakNews.map((item, index) => (
                            <NewsItemHorizontal key={index} {...item}/>
                        ))}
                    </div>
                    
                </div>
                <div className="zone-right">
                    <img className="w-100" src="https://event.mediacdn.vn/257767050295742464/image/embed/2024/5/21/genz-cover-17162681168831952005795.png" alt="" />
                    <div className="zone-right__list">
                        {dataZoneNews && dataZoneNews.map((item, index) => (
                            <div className="zone-right__list--item">
                                <img src={item.imgUrl} alt="" />
                                <span>{item.title}</span>
                            </div>
                        ))}
                        
                    </div>
                    <div className="zone-right__view-details">
                        <span>Xem thêm</span> <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="horizontal-line-grey"></div>
        </div>
    )
}

export default BreakNews;