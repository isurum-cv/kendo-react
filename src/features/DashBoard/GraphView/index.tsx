
import React from 'react';
import { StackedBarChartProps, StackedBarSeries } from '../../../components/StackedBarChart/types';
import GraphViewKU from '../../../components/Dashboard/GraphView';

const GraphView = () => {
    const chartSeries: StackedBarSeries[] = [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
    }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8, 21, 7, 25, 13, 22, 8]
    }]

    const xaxis = ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT',
        '01/11/2011 GMT', '01/12/2011 GMT']

    const chartProps: StackedBarChartProps = {
        series: chartSeries,
        xaxisType: "datetime",
        xaxis: xaxis,
        height: 130
    }

    return (
        <GraphViewKU stackedBar={chartProps} />
    )
}

export default GraphView
