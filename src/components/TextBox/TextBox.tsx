import React from "react";
import "./TextBox.css";

interface TextBoxProps {
    title?: string;
    input?: string;
}

const TextBox : React.FC<TextBoxProps> = ({title, input}) => {
    return (
        <div className="container">
            <div className="title">{title || "title"}:</div>
            <div className="input">{input || ""}</div>
        </div>
    )
}

export default TextBox;