import React, { useContext, useState } from 'react';
import { BarChart, AreaChart, LineData, BarData } from 'react-easy-chart';
import { Grid, Theme, createStyles, withStyles, Typography } from '@material-ui/core';
import { GridSize } from '@material-ui/core/Grid';
import ToolTip from './Tooltip';


const ubiqumTotals: { [key: string]: cityObj; } = {
    Berlin: {
        total: 29,
        data: 8,
        mern: 11,
        java: 11,
        sales: [[
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 1 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 4 },
            { x: '1-Feb-15', y: 15 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 7 }
        ],
        [
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 8 },
            { x: '1-Mar-15', y: 7 },
            { x: '1-Apr-15', y: 4 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 0 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 1 }
        ]
        ]
    },
    Barcelona: {
        total: 46,
        data: 0,
        mern: 36,
        java: 10,
        sales: [[
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 1 },
            { x: '1-Mar-15', y: 5 },
            { x: '1-Apr-15', y: 8 },
            { x: '1-May-15', y: 8 }
        ],
        [
            { x: '1-Jan-15', y: 9 },
            { x: '1-Feb-15', y: 14 },
            { x: '1-Mar-15', y: 14 },
            { x: '1-Apr-15', y: 4 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 0 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 0 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 5 }
        ]
        ]
    },
    Madrid: {
        total: 9,
        data: 0,
        mern: 6,
        java: 3,
        sales: [[
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 1 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ]
        ]
    },
    Amsterdam: {
        total: 47,
        data: 0,
        mern: 10,
        java: 37,
        sales: [[
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 1 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ]
        ]
    },
    Lisbon: {
        total: 29,
        data: 8,
        mern: 11,
        java: 11,
        sales: [[
            { x: '1-Jan-15', y: 0 },
            { x: '1-Feb-15', y: 1 },
            { x: '1-Mar-15', y: 3 },
            { x: '1-Apr-15', y: 5 },
            { x: '1-May-15', y: 5 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ],
        [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
        ]
        ]
    },
}

interface cityObj {
    total: number,
    data: number,
    mern: number,
    java: number,
    sales: LineData[][]
}
interface UbiqumTotals {
    Berlin: Object,
    Barcelona: Object,
    Madrid: Object,
    Amsterdam: Object,
    Lisbon: Object,
}
type city = keyof UbiqumTotals
const styles = (theme: Theme) => createStyles({



})
interface Props {
    classes: any
}
const Chart: React.FC<Props> = ({ classes }) => {

    const { innerWidth, innerHeight } = window;
    console.log('innerWidth :', innerWidth);
    const chartWidth = innerWidth / 2
    const chartHeignt = innerHeight / 2
    const [showCity, setShowCity] = useState(false)
    const [tooltip, setTooltip] = useState({
        showToolTip: false,
        windowWidth: innerWidth - 100,
        componentWidth: 200,
        top: '',
        left: '',
        x: 0,
        y: 0
    })

    const [city, setCity] = useState<city>('Berlin')

    const handleChartClick = (cityObj: any) => {

        setShowCity(true)
        setCity(cityObj.x)
        console.log('city', city)

    }

    const mouseOverHandler = (d: { y: any; x: any; }, e: { screenY: number; screenX: number; }) => {
        console.log('d :', d);
        setTooltip({
            ...tooltip,
            showToolTip: true,
            top: `${e.screenY + 10}px`,
            left: `${e.screenX - 10}px`,
            y: d.y,
            x: d.x
        });
    }

    const mouseMoveHandler = (e: { y: number; x: number; }) => {
        if (tooltip.showToolTip) {
            setTooltip({
                ...tooltip,
                top: `${e.y - 10}px`,
                left: `${e.x + 10}px`
            });
        }
    }

    const mouseOutHandler = () => {
        setTooltip({ ...tooltip, showToolTip: false });
    }
    const createTooltip = () => {
        if (tooltip.showToolTip) {
            console.log('tooltip :', tooltip);
            return (
                <ToolTip
                    top={tooltip.top}
                    left={tooltip.left}
                >
                    The x value is {tooltip.x} and the y value is {tooltip.y}
                </ToolTip>
            );
        }
        return false;
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <BarChart
                        axisLabels={{ x: 'Cities', y: 'Students' }}
                        axes
                        colorBars
                        height={chartHeignt}
                        width={chartWidth}
                        barWidth={20}
                        mouseOverHandler={mouseOverHandler}
                        mouseOutHandler={mouseOutHandler}
                        // mouseMoveHandler={mouseMoveHandler}
                        yTickNumber={3}
                        xType={'text'}
                        clickHandler={(c) => handleChartClick(c)}
                        data={[
                            { x: 'Berlin', y: ubiqumTotals.Berlin.total, },
                            { x: 'Barcelona', y: ubiqumTotals.Barcelona.total },
                            { x: 'Amsterdam', y: ubiqumTotals.Amsterdam.total },
                            { x: 'Lisbon', y: ubiqumTotals.Lisbon.total },
                            { x: 'Madrid', y: ubiqumTotals.Madrid.total },
                        ]}
                    />
                </Grid>

                {showCity &&
                    <Grid container>
                        <Grid item xs={12}>

                            <Typography color="secondary" component="h5" variant="h5">
                                {city}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <AreaChart
                                xType={'time'}
                                axes
                                dataPoints
                                xTicks={5}
                                yTicks={3}
                                mouseOverHandler={mouseOverHandler}
                                mouseOutHandler={mouseOutHandler}
                                // mouseMoveHandler={mouseMoveHandler}
                                // noAreaGradient
                                // tickTimeDisplayFormat={'%d %m'}
                                interpolate={'cardinal'}
                                height={chartHeignt / 2}
                                width={chartWidth}
                                lineColors={['black', 'purple']}
                                data={ubiqumTotals[city].sales}
                            // data={[
                            //     [
                            //         { x: '1-Jan-15', y: 20 },
                            //         { x: '1-Feb-15', y: 10 },
                            //         { x: '1-Mar-15', y: 33 },
                            //         { x: '1-Apr-15', y: 45 },
                            //         { x: '1-May-15', y: 15 }
                            //     ], [
                            //         { x: '1-Jan-15', y: 10 },
                            //         { x: '1-Feb-15', y: 15 },
                            //         { x: '1-Mar-15', y: 13 },
                            //         { x: '1-Apr-15', y: 15 },
                            //         { x: '1-May-15', y: 10 }
                            //     ]
                            // ]}
                            />


                        </Grid>
                        <Grid item xs={6}>

                            <BarChart
                                axisLabels={{ x: 'Cities', y: 'Students' }}
                                axes
                                colorBars
                                height={chartHeignt / 2}
                                width={chartWidth / 2}
                                barWidth={5}
                                yTickNumber={3}
                                xType={'text'}
                                mouseOverHandler={mouseOverHandler}
                                mouseOutHandler={mouseOutHandler}
                                // mouseMoveHandler={mouseMoveHandler}
                                // innerHoleSize={10}

                                // labels
                                clickHandler={(f) => console.log(f)}
                                data={[
                                    { x: 'DATA', y: ubiqumTotals[city].data, },
                                    { x: 'MERN', y: ubiqumTotals[city].mern },
                                    { x: 'JAVA', y: ubiqumTotals[city].java },
                                ]}
                            />
                        </Grid>

                    </Grid>}
            </Grid>
            {createTooltip()}
        </div >
    );

}

export default withStyles(styles)(Chart)
                // import React from 'react';
// import {Bar} from 'react-chartjs-2';

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//         label: 'Sales',
//         type: 'line',
//         data: [51, 65, 40, 49, 60, 37, 40],
//         fill: false,
//         borderColor: '#EC932F',
//         backgroundColor: '#EC932F',
//         pointBorderColor: '#EC932F',
//         pointBackgroundColor: '#EC932F',
//         pointHoverBackgroundColor: '#EC932F',
//         pointHoverBorderColor: '#EC932F',
//         yAxisID: 'y-axis-2'
//     }, {
//         type: 'bar',
//         label: 'Visitor',
//         data: [200, 185, 590, 621, 250, 400, 95],
//         fill: false,
//         backgroundColor: '#71B37C',
//         borderColor: '#71B37C',
//         hoverBackgroundColor: '#71B37C',
//         hoverBorderColor: '#71B37C',
//         yAxisID: 'y-axis-1'
//     }]
// };

// const options = {
//     responsive: true,
//     tooltips: {
//         mode: 'label'
//     },
//     elements: {
//         line: {
//             fill: false
//         }
//     },
//     scales: {
//         xAxes: [
//             {
//                 display: true,
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             }
//         ],
//         yAxes: [
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//                 id: 'y-axis-1',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             },
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',
//                 id: 'y-axis-2',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             }
//         ]
//     }
// };

// const plugins = [{
//     afterDraw: (chartInstance: { chart: { ctx: any; }; }, easing: any) => {
//         const ctx = chartInstance.chart.ctx;
//         ctx.fillText("This text drawn by a plugin", 100, 100);
//     }
// }];

// const Chart: React.FC = () => {
//     return (
//         <div>
//             <h2>Mixed data Example</h2>
//             <Bar
//                 data={data}
//             // options={options}
//             // plugins={plugins}
//             />
//         </div>
//     );

// }

// export default Chart