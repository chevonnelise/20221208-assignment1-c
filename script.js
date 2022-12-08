// initialise map

let singapore = [1.3521, 103.8198] // singapore's latlng
let map = L.map('map').setView(singapore, 13) 

// tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
