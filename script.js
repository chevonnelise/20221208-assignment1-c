// initialise map

let singapore = [1.3521, 103.8198] // singapore's latlng
let map = L.map('map').setView(singapore, 13) 

// tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// add marker

// let singaporeMarker = L.marker([1.3521, 103.8198]).addTo(map);
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
    const coordinates = taxiPoints.data.features[0].geometry.coordinates;

    // create marker cluster
    let markerClusterLayer = L.markerClusterGroup();

    for (let i = 0; i < coordinate.length; i++) {
        let coordinate = coordinates[i];
        const lng = coordinate[0];
        const lat = coordinate[1];
        let pos = [lat, lng];
            L.marker(pos).addTo(markerClusterLayer);
    }

    markerClusterLayer.addTo(map);
});


