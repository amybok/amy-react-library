import React from "react";
import "./PolarChart.css";

interface PolarChartProps {

}

const PolarChart: React.FC<PolarChartProps> = () => {
    return (
        <div className="wrapper">
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
        </div>
    )
}

export default PolarChart;