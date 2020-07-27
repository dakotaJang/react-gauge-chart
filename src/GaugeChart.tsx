import React, { RefObject, createRef } from "react";
import GaugeChartUsingD3, {GaugeChartOptions} from "gauge-chart-using-d3";

interface GaugeChartProps {
  options: GaugeChartOptions;
  value: number;
}
class GaugeChart extends React.Component<GaugeChartProps> {
  private ref: RefObject<HTMLDivElement>;
  private chart: GaugeChartUsingD3;

  constructor(props: GaugeChartProps){
    super(props);
    this.ref = createRef();
    this.chart = new GaugeChartUsingD3(this.props.value, this.props.options);
  }

  componentDidMount() {
    this.ref.current?.appendChild(this.chart.node());
  }

  componentDidUpdate(prevProps: GaugeChartProps){
    if (this.props.value !== prevProps.value) {
      this.chart.update(this.props.value);
    } else {
      this.chart = new GaugeChartUsingD3(this.props.value, this.props.options);
      this.ref.current?.replaceChild(this.chart.node(), this.ref.current.firstChild!);
    }
  }

  render() {
    return (<div ref={this.ref}></div>)
  }
}

export default GaugeChart;