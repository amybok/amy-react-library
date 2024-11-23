import React from "react";
import "./OverlayTag.css";

interface OverlayTagProps {
    title?: string;
    colour?: string;
}

const OverlayTag : React.FC<OverlayTagProps> = ({title, colour}) => {
    return (
        <div className="container" style={{backgroundColor:colour}}>
            <div className="att">
                {title}
            </div>
        </div>
    )
}

export default OverlayTag;