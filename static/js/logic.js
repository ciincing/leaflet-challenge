// ALL EARTHQUAKES IN THE PAST DAY
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// GET REQUEST FOR QUERY URL, DISPLAY GEOJSON, THEN CALL THE FUNCTION WITH ITS DATA FEATURES
d3.json(url).then(data => {
    console.log(data);
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

// DISPLAY PLACE & TIME OF EACH EARTHQUAKE
function onEachFeature(features, layer){
    layer.bindPopup(`<h3>${features.properties.place}</h3><hr><p>${new Date(features.properties.time)}</p>`);};

    // CREATE JSON LAYER WITH FEATURES ARRAY
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: function(features, coordinates) {
            let depth = features.properties.mag;
            let geoMarkers = {
                radius: depth * 5,
                fillColor: colors(depth),
                fillOpacity: 0.7,
                weight: 0.5
            };
            return L.circleMarker(coordinates, geoMarkers);
        }
        });
    // CALL FUNCTION
    createMap(earthquakes);
};

// COLOR SCALE AND HOLD
function colors(depth) {
    let color = "";

    if (depth <= 1) {
        return color = "#056517";
    }
    else if (depth <= 2) {
        return color = "#3f8f29";
    }
    else if (depth <= 3) {
        return color = "#f7e379";
    }
    else if (depth <= 4) {
        return color = "##f2a134";
    }
    else if (depth <= 5) {
        return color = "#de1a24";
    }
    else {
        return color = "##6e0905";
    }

};

// CREATE MAP AND LAYERS
function createMap(earthquakes) {
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?',{layers: 'TOPO-WMS'});

    let grayscale = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 0,
        maxZoom: 22,
        subdomains: 'abcd',
        accessToken: 'YnpQEhRDopnhG3NFNlYUwXCpK50fR3yagyHj5MwZJKWU0gnuq4iYH7xJ49UjNWaC'
    });

    let baseMaps = {
        "Street Map": street,
        "Topographic Map": topo,
        "Grayscale Map": grayscale
    };
    
    let overlayMaps = {
        Earthquakes: earthquakes
    };

    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [street, earthquakes]
    });

    L.control.layers(baseMaps, overlayMaps, {
    }).addTo(myMap);
};
