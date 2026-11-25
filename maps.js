console.log("Init running");
console.log(typeof google);

async function init() {
    // Import the needed libraries.
    await google.maps.importLibrary('maps');

    // Access the map.
    const mapElement = document.querySelector('gmp-map');
    // Access the underlying map object.
    const innerMap = mapElement.innerMap;

    console.log({ mapElement, innerMap });
}


///////////
const mapElement = document.querySelector('gmp-map');
let innerMap;

async function init() {
    const { Polyline } = await google.maps.importLibrary('maps');
    innerMap = mapElement.innerMap;

    const flightPlanCoordinates = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
    ];
    const flightPath = new Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#f23bff',
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });

    flightPath.setMap(innerMap);
}

void init();