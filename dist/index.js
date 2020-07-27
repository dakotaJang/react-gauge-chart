import React, { createRef } from 'react';
import GaugeChartUsingD3 from 'gauge-chart-using-d3';

class GaugeChart extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        this.chart = new GaugeChartUsingD3(this.props.value, this.props.options);
    }
    componentDidMount() {
        var _a;
        (_a = this.ref.current) === null || _a === void 0 ? void 0 : _a.appendChild(this.chart.node());
    }
    componentDidUpdate(prevProps) {
        var _a;
        if (this.props.value !== prevProps.value) {
            this.chart.update(this.props.value);
        }
        else {
            this.chart = new GaugeChartUsingD3(this.props.value, this.props.options);
            (_a = this.ref.current) === null || _a === void 0 ? void 0 : _a.replaceChild(this.chart.node(), this.ref.current.firstChild);
        }
    }
    render() {
        return (React.createElement("div", { ref: this.ref }));
    }
}

export default GaugeChart;
export { GaugeChart };
