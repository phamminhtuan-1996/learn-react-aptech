import React from "react";

// data 
import {topHeaderMenu, topHeaderHastag, mainMenu} from '../data';
// components
import MenuSmallTop from "./MenuSmallTop";
import BannerHashTag from "./BannerHashTag";
import MainMenu from "./MainMenu";


function Header() {
    return (
        <header>
            <MenuSmallTop data={topHeaderMenu}/>
            <BannerHashTag data={topHeaderHastag}/>
            <MainMenu data={mainMenu}/>
            <div className="banner-header">
                <div className="container">
                    <img src="https://fedudesign.vn/wp-content/uploads/2020/07/Web-1920-%E2%80%93-2.jpg" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;