export const Marks = ({data, yScale, xScale, xValue, yValue, ttFormat}) =>
    data.map(d =>
    <rect
        key={yValue(d)}
        x={0}
        fill={"#137B80"}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
        >
        <title>{ttFormat(xValue(d))}</title>    
        </rect>
    );