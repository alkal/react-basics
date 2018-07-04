import React from 'react';

const NewsItem = (props) => {
    return(
        <li className="list-group-item">
            <h4>{props.item.title}</h4>
            <div>{props.item.feed}</div>
        </li>
    )
}

export default NewsItem;