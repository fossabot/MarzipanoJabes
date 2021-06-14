var map = L.map('mapleaflet').setView([37.87900301094654 ,  -4.7795140743255615], 18);

// Capas base
var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



var img_mezquitacatedral= '/img/maptiles/FloorPlan01/8/128_128.jpg';
var img_bounds_mezquitacatedral = [[37.8779322129,-4.78079045451],[37.8801481973,-4.77824178567]];
var plano_mezquitacatedral = new L.imageOverlay(img_mezquitacatedral, img_bounds_mezquitacatedral,{
	opacity: 0.8,
	attribution: "<a href='https://es.wikipedia.org/wiki/Mezquita-catedral_de_C%C3%B3rdoba' target='_blank'>Wikimedia Commons</a>"
});

plano_mezquitacatedral.addTo(map);
var baseMaps = {
    "OSM": Hydda_Full
};

var overlayMaps = {
    "Imagen": plano_mezquitacatedral
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright',
    collapsed: false
}).addTo(map);