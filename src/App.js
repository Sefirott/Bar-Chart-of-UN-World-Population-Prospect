import React from "react";
import * as d3 from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = window.innerWidth / 1.1;
const height = window.innerHeight / 1.1;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisOffset = 50;
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;


const App = () => {
    const data = useData();

    const yValue = d => d.Country;
    const xValue = d => d.Population;
    const siFormat = d3.format(".2s");
    const tFormat = tValue => siFormat(tValue).replace("G", "B");

const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);


const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);


    return (
<svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                    tFormat={tFormat} 
                />
                <AxisLeft yScale={yScale} />
                <text
                    className="axis-label"
                    x={innerWidth / 2}
                    textAnchor="middle"
                    y={innerHeight + xAxisOffset}>
                    Population
                </text>
                <Marks
                    data={data}
                    yScale={yScale}
                    xScale={xScale}
                    xValue={xValue}
                    yValue={yValue}
                    ttFormat={tFormat} 
                />
</g>
</svg>
       

    );

}

export default App;
