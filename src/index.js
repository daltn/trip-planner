const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = ///API TOKEN

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom : 12,
  style: "mapbox://styles/mapbox/streets-v10"
});



console.log('Hayyyyyyyy from JS Zadddiiiez');
