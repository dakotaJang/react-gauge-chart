import React from 'react';
import ReactDOM from 'react-dom';
import GaugeChart from './GaugeChart';
import { GaugeChartOptions } from 'gauge-chart-using-d3';

interface GaugeChartOptionsState extends GaugeChartOptions {[key: string]: any | boolean | string | number | undefined}
interface GaugeChartStates {
  options: GaugeChartOptionsState;
  value: number;
}
class Demo extends React.Component<{},GaugeChartStates> {
  state:GaugeChartStates = {
    options: {min:0, max:100},
    value: 50,
  }
  render() {
    return (
      <>
        <div>
          <label htmlFor="value">value</label>
          <input type={"range"} min={0} max={100} id="value"
            onChange={(e) => this.setState({value:Number(e.target.value)})}
          />
          <span>{this.state.value}</span>
        </div>
        {
          [
            {name:'minAngle',min:-2*Math.PI,max:2*Math.PI,step:"0.001"},
            {name:'maxAngle',min:-2*Math.PI,max:2*Math.PI,step:"0.001"},
            {name:'innerRadius',min:0,max:300},
            {name:'outerRadius',min:0,max:300},
            {name:'minorTickStep',min:0,max:100},
            {name:'majorTickStep',min:0,max:100},
            {name:'majorTickHeight',min:0,max:100},
            {name:'minorTickHeight',min:0,max:100},
            {name:'majorTickWidth',min:0,max:25},
            {name:'minorTickWidth',min:0,max:25},
            {name:'needleRadius',min:0,max:300},
            {name:'tickLabelFontSize',min:10,max:32},
            {name:'tickLabelRadius',min:0,max:300},
            {name:'tickRadius',min:0,max:300},
            {name:'valueLabelFontSize',min:10,max:32},
            {name:'width',min:100,max:300},
          ].map(key => (
            <div>
              <label htmlFor={key.name}>{key.name}</label>
              <input type={"range"} min={key.min} max={key.max} id={key.name} step={key.step ? key.step : "1"}
                onChange={(e) => this.setState({options: {...this.state.options, [key.name]: Number(e.target.value)}})}
              />
              <span>{this.state.options[key.name]}</span>
            </div>
          ))
        }
        {
          [
            "backgroundSectionColor",
            "needleColor",
            "needlePinColor",
            "tickColor",
          ].map(key => (
            <div>
              <label htmlFor={key}>{key}</label>
              <input id={key} placeholder="#000"
                onChange={(e) => this.setState({options: {...this.state.options, [key]: e.target.value}})}
              />
            </div>
          ))
        }
        <div>
          <input type="checkbox" id="tickDirection"
            onChange={(e) => this.setState({options: {...this.state.options, tickDirection: e.target.checked ? 'in' : 'out'}})}
        /><label htmlFor="tickDirection">tickDirection ({this.state.options.tickDirection})</label>
        </div>
        <div>
          <input type="checkbox" id="displayValue"
            onChange={(e) => this.setState({options: {...this.state.options, displayValue: e.target.checked}})}
          /><label htmlFor="displayValue">displayValue</label>
        </div>
        <div>
          <input type="checkbox" id="displayMajorTickLabels"
            onChange={(e) => this.setState({options: {...this.state.options, displayMajorTickLabels: e.target.checked}})}
          /><label htmlFor="displayMajorTickLabels">displayMajorTickLabels</label>
        </div>
        <GaugeChart
          options={{
            sections: [
              { color:'#0f0', min: 0, max: 40 },
              { color:'#ff0', min: 40, max: 70 },
              { color:'#f00', min: 70, max: 100 },
            ],
            majorTickStep: 10,
            minorTickStep: 2,
            ...this.state.options
          }}
          value={this.state.value}
        />
      </>
    )
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Demo/>, root);