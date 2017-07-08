// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

//This section waits until the page is loaded
$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!


//This is the function to get JSON data from earthquake data base
  $.ajax({
    method: 'GET',
    url: 'https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time',
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

  })
}


//This section loads the map into the page
      function initMap() {
        var uluru = { lat: 37.78, lng: -122.44};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


//This section creates a pin on the map
var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'images/..'});
      ;
