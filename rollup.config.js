import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';

const template = () => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>GaugeChart</title>
  </head>
  <body>
    <script>process={env:{NODE_ENV:"DEVELOPMENT"}}</script>
    <script src="Demo.js" type="module"></script>
  </body>
</html>`
const devConfig = {
  input: 'src/Demo.tsx',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [
    typescript({noEmitOnError:false, declaration:false, outDir: 'build'}),
    nodeResolve(),
    commonjs(),
    html({ template }),
  ]
};

const buildConfig = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: [ 'react', 'gauge-chart-using-d3' ],
  plugins: [
    typescript(),
  ]
};

const config = process.env.DEVELOPMENT ? devConfig : buildConfig;

export default config;