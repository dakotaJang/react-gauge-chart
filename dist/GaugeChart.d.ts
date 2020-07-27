import React from "react";
import { GaugeChartOptions } from "gauge-chart-using-d3";
interface GaugeChartProps {
    options: GaugeChartOptions;
    value: number;
}
declare class GaugeChart extends React.Component<GaugeChartProps> {
    private ref;
    private chart;
    constructor(props: GaugeChartProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: GaugeChartProps): void;
    render(): JSX.Element;
}
export default GaugeChart;
