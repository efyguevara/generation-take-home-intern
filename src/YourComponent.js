import React, { Component } from 'react';
let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWZ5Z3VldmFyYSIsImEiOiJjanphZGdpemYwMHJzM2JtbmhoZmRjbWwyIn0.s8ZYRmQ8_Ogr__LylNcBfg';
let map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});
/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>
        
      </div>
    );
  }
}

let divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

export default YourComponent;
