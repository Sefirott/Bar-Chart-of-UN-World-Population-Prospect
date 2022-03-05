export const AxisLeft = ({ yScale }) =>
    yScale.domain().map(tValue => (
        <g className="tick">
        <text
        key={tValue}
        style={{ textAnchor: "end" }}
        x={-3}
        y={yScale(tValue) + yScale.bandwidth() / 2}
        dy=".32em">
        {tValue}
    </text>
        </g>
));