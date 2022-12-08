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
// let circle = L.circle([1.3521, 103.8198], {
//     color: 'red',
//     fillColor:"orange",
//     fillOpacity:0.5,
//     radius:500
// })

// circle.addTo(map);

document.addEventListener('DOMContentLoaded', async() => {
    const taxiPoints = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    console.log(taxiPoints)
    const coordinate = taxiPoints.data.features[0].geometry.coordinates;

    // create marker cluster
    let markersClusterLayer = L.markerClusterGroup();

    for (let i = 0; i < coordinate.length; i++) {
        let coordinate = coordinates[i];
        const lng = coordinate[0];
        const lat = coordinate[1];
        let pos = [lat, lng];
            L.marker(pos).addTo(markerClusterLayer);
    }

    markersClusterLayer.addTo(map);
})


