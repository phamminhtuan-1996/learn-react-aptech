import React from "react";

function MenuSmallTop() {
    return (
        <div className="menu-small-top">
        <div className="container">
            <ul className="menu-small-top__list">
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> eMagazine</a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> Genz Area</a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> XANH chưa - check!!!</a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> ShowLive</a></li>
            </ul>
            <div className="menu-small-top__search">
                <input type="text" placeholder="Tìm kiếm" />
                <i className="fa fa-search"></i>
            </div>
        </div>
    </div>
    )
}
export default MenuSmallTop;