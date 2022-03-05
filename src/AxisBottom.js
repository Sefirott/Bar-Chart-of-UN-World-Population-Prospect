export const AxisBottom = ({xScale, innerHeight, tFormat}) =>
    xScale.ticks().map(tValue => (
    <g className="tick" key={tValue} transform={`translate(${xScale(tValue)},0)`}>
        <line y2={innerHeight} />
        <text
            style={{ textAnchor: "middle" }}
            dy=".71em"
            y={innerHeight + 3}
        >{tFormat(tValue)}
        </text>
    </g>
));