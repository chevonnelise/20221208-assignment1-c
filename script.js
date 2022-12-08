// initialise map

let singapore = [1.3521, 103.8198] // singapore's latlng
let map = L.map('map').setView(singapore, 13) 

// tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add marker

let singaporeMarker = L.marker([1.3521, 103.8198]).addTo(map);
let circle = L.circle([1.3521, 103.8198], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius:500
})

circle.addTo(map);

function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

// create marker cluster
let markersClusterLayer = L.markerClusterGroup();

for (let i = 0; i < 1000; i++) {
    let pos = getRandomLatLng(map);
    L.marker(pos).addTo(markerClusterLayer);
}
markersClusterLayer.addTo(map);