import React from "react";

function MainMenu({data = []}) {
    return (
        <div className="main-menu">
        <div className="container">
            <ul className="main-menu__list">
                <li className="main-menu__list--item"><a href=""><i className="fa fa-home"></i></a></li>
                {data && data.map((item, index) => (
                    <li className="main-menu__list--item" key={index}><a href="">{item}</a></li>
                ))}
                <li className="main-menu__list--item"><a href=""><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
    )
}

export default MainMenu;