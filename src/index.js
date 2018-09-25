const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGFsdG4iLCJhIjoiY2ptaTdqbHRrMDFiNDN3cXBtb3BrbDcyYSJ9.KtnZ950CEihNW-agMQEVQA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

console.log('Hayyyyyyyy from JS Zadddiiiez');

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker('activities', [-74.009151, 40.705086]);

marker.addTo(map);

module.exports = markerDomEl;
