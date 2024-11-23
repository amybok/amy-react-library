import React from "react";
import "./OverlayTag.css";

interface OverlayTagProps {
    title?: string;
    colour?: string;
}

const OverlayTag : React.FC<OverlayTagProps> = ({title, colour}) => {
    return (
        <div className="container" style={{backgroundColor:colour || "black"}}>
            <div className="att">
                {title || "Attribute"}
            </div>
        </div>
    )
}

export default OverlayTag;