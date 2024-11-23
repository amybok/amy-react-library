import React from "react";
import "./Polaroid.css";

interface PolaroidProps {
    title?: string;
}

const Polaroid : React.FC<PolaroidProps>  = ({title}) => {
    return (
        <div className="background">
            <div className="image">

            </div>
            <div className="overlay tag"/>
            <div className="text"> 
                {title} Symphony
            </div>

        </div>
    );
}

export default Polaroid;