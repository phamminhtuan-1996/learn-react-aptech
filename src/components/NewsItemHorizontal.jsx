import React from "react";
import moment from 'moment';


function NewsItemHorizontal({title = '', img = '', category = '', time = '', description = ''}) {
    return (
        <>
            <div className="news-item-horizontal">
                <div className="news-item-horizontal__img">
                    <img src={img} alt="" />
                </div>
                <div className="news-item-horizontal__content">
                    <h3 className="news-item-horizontal__content--title">{title}</h3>
                    <div className="news-item-horizontal__content--time">
                        <strong>{category} -</strong> <span> { time && moment(time).fromNow()} </span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <div className="horizontal-line-grey"></div>
        </>
    )
}

export default NewsItemHorizontal;