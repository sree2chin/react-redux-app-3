import React from 'react';

const PostsItem = (props) =>{
    
    return(
        <div>{props.match.params.id}</div>
    )
}

export default PostsItem;