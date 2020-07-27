# react-gauge-chart

## Install
```sh
# install latest
npm i -D git+https://github.com/dakotaJang/react-gauge-chart.git

# install specific version
npm i -D git+https://github.com/dakotaJang/react-gauge-chart.git#v0.0.1
```

## Usage
```tsx
import GaugeChart from 'react-gauge-chart';

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
```