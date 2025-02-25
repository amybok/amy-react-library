import React from "react";
import "./Polaroid.css";

interface PolaroidProps {
    title?: string;
    colour?: string;
    textColour?: string;
}

const Polaroid : React.FC<PolaroidProps>  = ({title, colour, textColour}) => {
    return (
        <div className="background" style={{backgroundColor: colour, borderColor: colour}}>
            <div className="image">

            </div>
            <div className="overlay tag"/>
            <div className="text" style={{color: textColour}}> 
                {title || "Symphony"} 
            </div>

        </div>
    );
}

export default Polaroid;