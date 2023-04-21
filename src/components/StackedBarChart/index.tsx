import { useState } from "react"
import { StackedBarChartProps } from "./types"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";


const StackedBarChart = (props: StackedBarChartProps) => {
    let options: ApexOptions =  {
        chart: {
            height: 350,
            stacked: true,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                columnWidth: '10',
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            type: props.xaxisType,
            categories: props.xaxis,
        },
        // legend: {
        //     position: 'right',
        //     offsetY: 40
        // },
        fill: {
            opacity: 1
        }
    }

    return <div>
        <ReactApexChart options={options} series={props.series} type="bar" height={props.height} />
    </div>
}

export default StackedBarChart;