import Plotly from 'plotly.js-dist';

export function showFeature() {
  let tracel = {
    x: ['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter'
  };
  
  let data = [tracel];
  
  let layout = {
    title: {
      text: 'Scroll and Zoom'
    },
    showlegend: false
  };
  
  Plotly.newPlot('tester', data, layout, {scrollZoom: true});
}
