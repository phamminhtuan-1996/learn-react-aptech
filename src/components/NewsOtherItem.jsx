
import React from "react";
import SohaIcon from '../img/soha-icon.png'

function NewsOtherItem({img = '', title = '', related = []}) {
    return (
        <div className="news-orther__item">
            <div className="news-orther__item--title">
                <div className="title-icon">
                    <img src={SohaIcon} alt="" />
                </div>
                <h4>tin hot từ soha</h4>
            </div>
            <div className="news-orther__item--content">
                <div className="content-img">
                    <img src={img} alt="" />
                </div>
                <strong className="content-title">{title}</strong>
            </div>
            <div className="news-orther__item--list-internal">
                <div className="horizontal-line-grey"></div>
                {/* <strong className="content-title">Nàng "Vàng Anh" đình đám vừa được thăng hàm đại úy ở tuổi 39: Ngày càng trẻ...</strong>
                <div className="horizontal-line-grey"></div>
                <strong className="content-title">Nam MC nổi tiếng VTV ở tuổi 54: Bị nhầm là xe ôm vì diện mạo thay đổi, Chí Trung...</strong> */}
                {related.map((item, index) => (
                    <>
                        <strong className="content-title" key={index}>{item}</strong>
                        {related.length - 1 !== index && (
                            <div className="horizontal-line-grey"></div>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default NewsOtherItem;