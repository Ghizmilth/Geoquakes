// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

var locations = [];
var locationObj = {};
var mapLatLngBoth = {};
//var lng;
var myLatlng;


//This section waits until the page is loaded
$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  //This is the function to get JSON data from earthquake data base
  $.ajax({
    method: 'GET',
    url: 'https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-07-01%2000:00:00&endtime=2017-07-08%2023:59:59&minmagnitude=4.5&orderby=time',
    dataType: 'json',
    success: onSuccess


  }); //End oj JSON function
}); //End of the function "ready"


// This function prints a list of all earthquakes recently reported into the page
// and prints it as a <p> with the title of the quake to the map

function onSuccess(qData) {
  console.log(qData);

  qData.features.forEach(function(itemName) {
    $("#info").append(`<p>${itemName.properties.title}</p>`)
  })

    var lat1 = qData.features["0"].geometry.coordinates[1];
    var lng1 = qData.features["0"].geometry.coordinates[0];
  //  var title = qData.features["0"].properties.title;
    console.log(lat1);
    console.log(lng1);

    renderMarker(lat1, lng1)

    locationObj.lat = lat1;
    locationObj.lng = lng1;

    locations[1] = lat1;
    locations[0] = lng1;

    }


//This section loads the map into the page
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: {lat: -28.024, lng: 140.887}
          });

  //var myLatlng = new google.maps.LatLng(locations[1],locations[0]);
//var mapOptions = {
//  zoom: 4,
//  center: myLatlng
//}
//var map = new google.maps.Map(document.getElementById("map"), mapOptions);

//var marker = new google.maps.Marker({
  //  position: myLatlng,
  //  title:"Hello World!"
//});

// To add the marker to the map, call setMap();
//marker.setMap(map);

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers  var myLatLng = {lat: -25.363, lng: 131.044};



  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: new google.maps.LatLng(lat,lng),
      map: map,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'images/earthquake.png'
  });
}

function renderMarker(lat, lng) {
  return new google.maps.Marker({
    position: new google.maps.LatLng(lat,lng),
    map: map
  });
}

//var locations = ({lat: 90988},lng: 9989789});
