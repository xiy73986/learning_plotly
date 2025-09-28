import Plotly from 'plotly.js-dist';

export function showFeature() {
  var trace1 = {
    
    x: [0, 1, 2, 3, 4],
    
    y: [1, 5, 3, 7, 5],
    
    mode: 'lines+markers',
    
    type: 'scatter'
    
  };
  
  
  var trace2 = {
    
    x: [1, 2, 3, 4, 5],
    
    y: [4, 0, 4, 6, 8],
    
    mode: 'lines+markers',
    
    type: 'scatter'
    
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    
    title: {
      
      text: 'Click Here<br>to Edit Chart Title'
      
    }
    
  };
  
  
  Plotly.newPlot('tester', data, layout, {editable: true});
  
}

