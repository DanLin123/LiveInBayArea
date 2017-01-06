import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var POSITIONS = [
      {name: 'Home', latitude:  37.3986234 , longitude: -121.94488590000003 , 
      type: "home", visit: true},
      {name: 'Safeway', latitude: 37.394634, longitude: -121.94767999999999, 
        type: 'glocery', visit: true},
      {name: 'Walmart', latitude: 37.39000850000001, longitude: -121.98550219999998,
        type:'glocery', visit: true},
      {name: 'Sprouts Farmers Market', latitude: 37.3667316, longitude: -122.0308412,
        type: 'glocery', visit: true},
      {name: 'Philz Coffee', latitude: 37.39000850000001, longitude: -122.03171250000003,
        type:'cafe', visit: true},
      {name: 'Sunnyvale Library', latitude: 37.37189800000001, longitude: -122.03891699999997,
        type: 'lib', visit: true},
        {name: 'Levi\'s Stadium', latitude: 37.402317, longitude: -121.96899539999998,
            type: 'stadium', visit: true},
        {name: 'San Jose Flea Market', latitude: 37.368936, longitude: -121.8789875,
            type: 'market', visit: false},
        {name: 'Bar Crudo', latitude: 37.77568309999999, longitude: -122.4382114,
            type: 'food', visit: false}
            
];


ReactDOM.render(
  <App positions={POSITIONS}/>,
  document.getElementById('root')
);
