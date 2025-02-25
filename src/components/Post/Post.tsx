import React from "react";
import "./Post.css"

interface PostProps {
    label?:  string;
}

const Post : React.FC<PostProps> = ({label}) => {
    return (
        <div className="postBackground">
            <div className="carousel">
                <div className="image"></div>
                <div className="image"></div>
            </div>
            <div className="header">
                <div className="postTitle">{label || "Title"}</div>
                <div className="overlay tag"/>
            </div>
            <div className="bodyText">dolorem ipsum</div>
        </div>
    )
}

export default Post;