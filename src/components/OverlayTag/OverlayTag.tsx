import React from "react";
import "./OverlayTag.css";

interface OverlayTagProps {
    title?: string;
    colour?: string;
    textColour?: string;
}

const OverlayTag : React.FC<OverlayTagProps> = ({title, colour, textColour}) => {
    return (
        <div className="container" style={{backgroundColor:colour || "black"}}>
            <div className="att" style={{color: textColour || "white"}}>
                {title || "Attribute"}
            </div>
        </div>
    )
}

export default OverlayTag;