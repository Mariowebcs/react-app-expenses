import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar';


const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...dataPointsValues);

    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={maxValue}
                key={dataPoint.label}
            />                
            ))}
        </div>
    )

};


export default Chart;