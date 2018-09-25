const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGFsdG4iLCJhIjoiY2ptaTdqbHRrMDFiNDN3cXBtb3BrbDcyYSJ9.KtnZ950CEihNW-agMQEVQA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

console.log('Hayyyyyyyy from JS Zadddiiiez');
