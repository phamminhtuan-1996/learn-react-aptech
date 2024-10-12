import React from "react";

function MenuSmallTop({data = [] }) {
    return (
        <div className="menu-small-top">
        <div className="container">
            <ul className="menu-small-top__list">
                {data && data.map((item, index) => (
                    <li key={index}><a href="#"><i className="fa fa-star" aria-hidden="true" ></i> {item}</a></li>
                ))}
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