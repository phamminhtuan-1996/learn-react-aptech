import React from "react";

function BannerHashTag({data = []}) {
    return (
        <div className="banner-hash-tag">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Logo_Kenh14.svg/640px-Logo_Kenh14.svg.png" alt="" />
                    </a>
                </div>
                <i className="fa fa-line-chart" aria-hidden="true"></i>
                {data && data.map((item, index) => (
                    <a href="#" className="banner-hash-tag__item" key={index}>#{item}</a>
                ))}
            </div>
        </div>
    )
}

export default BannerHashTag;