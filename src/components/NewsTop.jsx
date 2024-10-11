import React from "react";

function NewsTop() {
    return (
        <div className="news-top">
            <div className="news-top__main">
                <div className="news-top__main--img">
                    <img src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2024/8/15/ngoc-mai-quoc-nghiep-17176669084981876739133-1723719289085355783247-300-54-784-828-crop-1723719326286551621714.png" alt="" />
                </div>
                <div className="news-top__main--content">
                    <h3 className="content-title">
                        Sở Văn hóa đang xác minh Ngọc Mai - Quốc Nghiệp đã về Việt Nam hay chưa
                    </h3>
                    <p>"Chúng tôi sẽ tiếp tục phối hợp với các cơ quan liên quan về nội dung này" - đại diện Sở Văn hóa và Thể thao TP.HCM cho biết.</p>
                </div>
            </div>
            <div className="news-top__right">
                <div className="news-top__right--img">
                    <img className="w-100" src="https://kenh14cdn.com/zoom/220_289/203336854389633024/2024/8/16/tai-xuong-1723731303971400117737-156-108-733-541-crop-1723775133173517283514.jpg" alt="" />
                </div>
                <h4 className="news-top__right--title">
                    Hằng Du Mục yêu cầu được tăng cường bảo vệ khi Tôn Bằng sắp được thả
                </h4>
            </div>
        </div>
    )
}

export default NewsTop;