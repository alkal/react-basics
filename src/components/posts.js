import React from 'react';
import {Link} from 'react-router-dom';

const ids =[
    {id:'1',name:'Post 1',author:'alkal'},
    {id:'2',name:'Post 2',author:'mmav'},
    {id:'3',name:'Post 3',author:'asiflo'}
];

const list = ids.map( item  =>{
    return(
        <li className="list-inline-item" key={item.id}>
            <Link to={{
                        pathname:`/posts/${item.id}/${item.author}`
                }}>{item.name}</Link>
        </li>
    )
});


const Post = (props) => {
    return (
        <ul className="list-inline">
            {list}
        </ul>
    )
}

export default Post;