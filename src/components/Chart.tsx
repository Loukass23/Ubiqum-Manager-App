import React, { useContext, useState } from 'react';
import { BarChart } from 'react-easy-chart';


const ubiqumTotals = {
    Berlin: {
        total: 29,
        data: 8,
        mern: 11,
        java: 11
    },
    Barcelona: {
        total: 4,
        data: 8,
        mern: 11,
        java: 11
    },
    Madrid: {
        total: 6,
        data: 8,
        mern: 11,
        java: 11
    },
    Amsterdam: {
        total: 29,
        data: 8,
        mern: 11,
        java: 11
    },
    Lisbon: {
        total: 29,
        data: 8,
        mern: 11,
        java: 11
    },
}

interface cityObj {
    x: city,
    y: number
}
interface UbiqumTotals {
    Berlin: Object,
    Barcelona: Object,
    Madrid: Object,
    Amsterdam: Object,
    Lisbon: Object,
}
type city = keyof UbiqumTotals

const Chart: React.FC = () => {

    const { innerWidth, innerHeight } = window;
    console.log('innerWidth :', innerWidth);
    const chartWidth = innerWidth / 1.5
    const chartHeignt = innerHeight / 2
    const [showCity, setShowCity] = useState(false)
    const [city, setCity] = useState<city>()
    const handleChartClick = (cityObj: any) => {
        const foo = Object.keys(ubiqumTotals)
        console.log('city :', foo);
        setShowCity(!showCity)
        setCity(cityObj.x.toString)

    }
    return (
        <div>
            <BarChart
                axisLabels={{ x: 'Cities', y: 'Students' }}
                axes
                colorBars
                height={chartHeignt}
                width={chartWidth}
                barWidth={20}

                yTickNumber={3}
                xType={'text'}
                clickHandler={(c: any) => handleChartClick(c)}
                data={[
                    { x: 'Berlin', y: ubiqumTotals.Berlin.total, },
                    { x: 'Barcelona', y: ubiqumTotals.Barcelona.total },
                    { x: 'Amsterdam', y: ubiqumTotals.Amsterdam.total },
                    { x: 'Lisbon', y: ubiqumTotals.Lisbon.total },
                    { x: 'Madrid', y: ubiqumTotals.Madrid.total },
                ]}
            />
            {/* {showCity && <BarChart
                axisLabels={{ x: 'Cities', y: 'Students' }}
                axes
                colorBars
                height={chartHeignt}
                width={chartWidth}
                barWidth={20}
                yTickNumber={3}
                xType={'text'}
                clickHandler={(f) => console.log(f)}
                data={[
                    { x: 'DATA', y: ubiqumTotals[city].total, },
                    { x: 'MERN', y: 46 },
                    { x: 'JAVA', y: 47 },
                ]}
            />} */}
        </div>
    );

}
export default Chart
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

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