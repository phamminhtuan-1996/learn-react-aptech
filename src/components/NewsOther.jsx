import React from "react";
import NewsOtherItem from "./NewsOtherItem";
import {newsOtherB6} from '../data';

function NewOther() {
    return (
        <div class="news-orther">
            {newsOtherB6.map((item, index) => (
                <NewsOtherItem {...item}/>
            ))}
        </div>
    )
}

export default NewOther;