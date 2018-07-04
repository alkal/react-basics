import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">
                <Link to={{
                        pathname:`${props.match.url}/1/alkal`
                }}>Post_1</Link> 
            </li>
            <li className="list-inline-item">
                <Link to={{
                            pathname:`${props.match.url}/2/mmav`
                    }}>Post_2</Link> 
            </li>
            <li className="list-inline-item">
                <Link to={{
                            pathname:`${props.match.url}/3/asiflo`
                    }}>Post_3</Link> 
            </li>
        </ul>
    )
}

export default Post;