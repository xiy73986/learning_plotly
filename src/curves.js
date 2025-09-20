// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
//   </head>
//   <body>
//     <div id="plot"></div>
//     <script>
//       // Example: y = x^2 and y = sin(x)
//       const x = Array.from({ length: 100 }, (_, i) => -5 + i * 0.1);

//       const trace1 = {
//         x: x,
//         y: x.map(v => v * v),  // y = x^2
//         mode: "lines",
//         name: "y = x²"
//       };

//       const trace2 = {
//         x: x,
//         y: x.map(v => Math.sin(v)),  // y = sin(x)
//         mode: "lines",
//         name: "y = sin(x)"
//       };

//       const layout = {
//         title: "Graphing Curves with Plotly.js",
//         xaxis: { title: "x" },
//         yaxis: { title: "y" }
//       };

//       Plotly.newPlot("plot", [trace1, trace2], layout);
//     </script>
//   </body>
// </html>


import Plotly from 'plotly.js-dist';

// Example: y = x^2 and y = sin(x)
const x = Array.from(
  {length: 100},
  (_, i) => -5 + i * 0.1
);

const trace1 = {
  x: x,
  y: x.map(v => v*v),
  mode: 'lines',
  name: 'y = x^2'
};

const trace2 = {
  x: x,
  y: x.map(v => Math.sin(v)),
  mode: 'line',
  name: 'y = sin(x)'
};

const layout = {
  titile: "Graphing Curves with Plotly.js",
  xaxis: {title: 'x'},
  yaxis: { title: 'y'}
};

Plotly.newPlot('plot', [trace1, trace2], layout);