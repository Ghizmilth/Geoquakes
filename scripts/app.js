// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!


  $.ajax({
    method: 'GET',
    url: 'https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time',
    dataType: 'json',
    success: onSuccess
  });
});




  function onSuccess(qData) {
    console.log(qData);

    qData.features.forEach(function(itemName) {
      $("#info").append(`<p>${itemName.properties.title}</p>`)
//console.log(itemName.properties.title);

  })
}


//<script>
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
  //  </script>
