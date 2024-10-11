import React from "react";
import bannerVertical from '../img/banner-vertical.png';
function ContentMain({children, isShowContentRight = true}) {
    return (
        <div className="content-main">
            <div className="container">
                <div className="content-main__left">
                    {children}
                </div>
                {isShowContentRight && (
                    <div className="content-main__right">
                        <img className="w-100" src={bannerVertical} alt="" />
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default ContentMain;