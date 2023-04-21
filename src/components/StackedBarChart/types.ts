export interface StackedBarSeries {
    name: string;
    data: number[];
}

export interface StackedBarChartProps {
    series: StackedBarSeries[];
    xaxisType: "category" | "datetime" | "numeric" | undefined;
    xaxis: string[];
    height: number
}