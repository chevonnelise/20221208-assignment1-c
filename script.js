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
    folor: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius:500
})

circle.addTo(map);