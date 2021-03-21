require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
  // Create a Map instance
  const myMap = new Map({
    basemap: "osm"
  });
  // Create a MapView instance (for 2D viewing) and reference the map instance
  const view = new MapView({
    map: myMap,
     center: [146.5, -42.0], // Longitude, latitude
    zoom: 6, // Zoom level
    container: "myMap" // Div element

  });
});