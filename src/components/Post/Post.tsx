import React from "react";
import "./Post.css"

interface PostProps {
    label?:  string;
}

const Post : React.FC<PostProps> = ({label}) => {
    return (
        <div className="background">
            <div className="carousel">
                <div className="image"></div>
            </div>
            <div className="header">
                <div className="title">{label || "Title"}</div>
                <div className="overlay tag"/>
            </div>
            <div className="body text"></div>
        </div>
    )
}

export default Post;