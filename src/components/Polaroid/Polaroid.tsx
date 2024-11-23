import React from "react";
import "./Polaroid.css";

interface PolaroidProps {
    label:  string;
}

const Polaroid  = (props: PolaroidProps) => {
    return (
        <div className="background">
            <div className="image">

            </div>
            <div className="overlay tag"/>
            <div className="text"> 

            </div>

        </div>
    );
}

export default Polaroid;