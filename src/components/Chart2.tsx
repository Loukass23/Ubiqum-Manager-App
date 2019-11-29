import React, { Component } from 'react';
// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import { XYPlot, VerticalBarSeries, DiscreteColorLegend, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries } from 'react-vis';

const Chart2: React.FC = () => {

    const myDATA = [
        { x: 1, id: 'Berlin', y: 29 },
        { x: 2, id: 'Barcelona', y: 46 },
        { x: 3, id: 'Amsterdam', y: 47 },
        { x: 4, id: 'Lisbon', y: 3 },
        { x: 5, id: 'Madrid', y: 9 },
    ];

    const yDomain = myDATA.reduce(
        (res, row) => {
            return {
                max: Math.max(res.max, row.y),
                min: Math.min(res.min, row.y)
            };
        },
        { max: -Infinity, min: Infinity }
    );

    return (
        <div>

            <XYPlot
                margin={{ left: 75 }}
                xType="time"
                width={300}
                height={300}
                yDomain={[yDomain.min, yDomain.max]}
            >
                <VerticalBarSeries onValueClick={(f) => console.log(f)} data={myDATA} />
                <XAxis />
                <YAxis />
            </XYPlot>

        </div>


    );

}

export default Chart2;