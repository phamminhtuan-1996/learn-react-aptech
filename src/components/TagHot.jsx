import React from "react";
import SlideNews from "./SlideNews";
import {slideTagHot} from '../data'

function TagHot({data}) {
    return (
        <div className="tag-hot">
        <div className="tag-hot__title">
            <div className="tag-hot__title--text">
                <h3>TAG HOT</h3>
            </div>
            <div className="tag-hot__title--btn">
                <button> TRENGDING TAG <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>
            </div>
        </div>
        <div className="news-for-you">
            <div className="news-for-you__title">
                <div className="news-for-you__title--left">
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    <h3>Hằng Du Mục bị chồng bạo hành</h3>
                </div>
            </div>
            <div className="slide-news-wrap">
                    <SlideNews className="slide-news slide-tag-hot" data={slideTagHot}/>
            </div>
        </div>
    </div>
    )
}

export default TagHot;