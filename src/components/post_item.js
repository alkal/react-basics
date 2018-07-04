import React from 'react';

const PostItem = (props) => {

    console.log(props);

    return (
        <div>
            <h2 className="h4">
                Post Details {props.match.params.id}
                <br/><small class="text-muted">Author: {props.match.params.username}</small>
            </h2>
        </div>
    )
}

export default PostItem;