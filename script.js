var map = L.map('mapid').setView([42, -88], 9);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

var marker = L.marker([42,-88]).addTo(map);
var marker_Camp = L.marker([41.8555,-88.15]).addTo(map);
var marker_Bucci = L.marker([42.3,-88.4]).addTo(map);

var circle = L.circle([41.975,-87.91], {
    color: 'purple',
    fillColor: '#f03',
    fillOpacity: 0.75,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [42.509, -88.08],
    [42.503, -88.06],
    [42.51, -88.047]
],
{color:'green',
fillColor:"yellow"}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker_Camp.bindPopup("<b>Hello world!</b><br>I am the Camp House.").openPopup();
marker_Bucci.bindPopup("<b>Hello world!</b><br>I am the Bucci House.").openPopup();
circle.bindPopup("I am ORD Airport.");
polygon.bindPopup("I am a polygon.");

/*
var popup = L.popup()
    .setLatLng([41.5,-87.75])
    .setContent("I am a standalone popup.")
    .openOn(map);
 */

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
