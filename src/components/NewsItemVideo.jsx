import React from "react";

function NewsItemVideo({title = "", video, countPreview = "", description = ""}) {
    return (
        <>
            <div className="news-item-video">
                <div className="news-item-video__video">
                    <video
                        width="100%"
                        height="240"
                        src={video}
                        controls
                    ></video>
                </div>
                <div className="news-item-video__info">
                    <span className="news-item-video__info--title">{title}</span>
                    <div className="news-item-video__info--view">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>{countPreview}</span>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div className="horizontal-line-grey"></div>
        </>
    )
}

export default NewsItemVideo;