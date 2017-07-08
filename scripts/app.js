// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

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
  });
});



//This function prints a list of all earthquakes recently reported into the page and prints it as a <p> with the title of the quake
function onSuccess(qData) {
  console.log(qData);

  qData.features.forEach(function(itemName) {
    $("#info").append(`<p>${itemName.properties.title}</p>`)
    //console.log(itemName.properties.title);

//qData.

  })
};


//This section loads the map into the page
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {
      lat: 10.654451, lng: -71.714795
    }
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'images/m'
  });
}

var locations = [
  {lat: 10.654451, lng: -71.714795}
]
