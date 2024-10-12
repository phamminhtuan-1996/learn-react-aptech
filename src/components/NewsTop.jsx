import React from "react";

function NewsTop({topNewsMain = {title: '', img: '', description: ''}, topNewsSecond = {title: '', img: ''}}) {
    return (
        <div className="news-top">
            <div className="news-top__main">
                <div className="news-top__main--img">
                    <img src={topNewsMain.img} alt="" />
                </div>
                <div className="news-top__main--content">
                    <h3 className="content-title">
                        {topNewsMain.title}
                    </h3>
                    <p>{topNewsMain.description}</p>
                </div>
            </div>
            <div className="news-top__right">
                <div className="news-top__right--img">
                    <img className="w-100" src={topNewsSecond.img} alt="" />
                </div>
                <h4 className="news-top__right--title">
                    {topNewsSecond.title}
                </h4>
            </div>
        </div>
    )
}

export default NewsTop;