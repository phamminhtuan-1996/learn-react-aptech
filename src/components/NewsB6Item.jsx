import React from "react";

function NewsB6Item({data = {category: '', title: '', img: '', description: '', related: []}, key = 0}) {
    return (
        <div className="news-b6__item" key={key}>
            <div className="news-b6__item--title">
                {data.category}
            </div>
            <div className="news-top__main">
                <div className="news-top__main--img">
                    <img src={data.img} alt="" />

                </div>
                <div className="news-top__main--content">
                    <h3 className="content-title">
                        {data.title}
                    </h3>
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="horizontal-line-grey"></div>
            <div className="news-b6__item--list-internal">
                {data.related && data.related.map((item, index) => (
                    <>
                        <div className="list-internal__item" key={index}>
                            <strong>{item}</strong>
                        </div>
                        {data.related.length - 1 === index && (
                            <div className="horizontal-line-grey"></div>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default NewsB6Item;