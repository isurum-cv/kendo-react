
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import StackedBarChart from '../../StackedBarChart';
import { GraphViewProps } from './type';

const GraphViewKU = (props: GraphViewProps) => {
    return (
        <div className="card" style={{border : '1px solid #dee2e6'}}>
            <TabView className='p-0'>
                <TabPanel header="Header I" className='p-0' prevButton={null} nextButton={null} closeIcon={null}>
                    <StackedBarChart series={props.stackedBar.series} xaxisType={props.stackedBar.xaxisType} xaxis={props.stackedBar.xaxis} height={props.stackedBar.height} />
                </TabPanel>
                <TabPanel header="Header II" prevButton={null} nextButton={null} closeIcon={null}>
                    <StackedBarChart series={props.stackedBar.series} xaxisType={props.stackedBar.xaxisType} xaxis={props.stackedBar.xaxis} height={props.stackedBar.height} />
                </TabPanel>
                <TabPanel header="Header III" prevButton={null} nextButton={null} closeIcon={null}>
                    <StackedBarChart series={props.stackedBar.series} xaxisType={props.stackedBar.xaxisType} xaxis={props.stackedBar.xaxis} height={props.stackedBar.height} />

                </TabPanel>
            </TabView>
        </div>
    )
}

export default GraphViewKU
