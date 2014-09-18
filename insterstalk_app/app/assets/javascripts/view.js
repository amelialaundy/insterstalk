function View() {
  this.searchButton = document.querySelector(".search-button")
  this.tagSpace = document.querySelector("#tag-space")
  this.map = null
  this.lat = 51.5072
  this.lng = 0.1275
  this.zoom = 2
  this.address = null
}

  View.prototype = {
    initializeMap: function() {
      mapOptions = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: this.zoom
      }
      this.map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    },

    getAddress: function() {
      this.address = $('#address-search-bar').val();
      return {
        address: this.address
      };
    },

    setMapLatLng: function(lat, lng) {
      this.lat = lat;
      this.lng = lng;
      this.map.setCenter({lat: this.lat, lng: this.lng})
      this.map.setZoom(15)
      // return {
      //   lat: this.lat,
      //   lng: this.lng
      // };
    },

    renderMapInstagramMarkers: function(newMarker) {
      var newMarkerOptions = {
        map: this.map,
        zoom: 8,
        position: new google.maps.LatLng(newMarker.lat, newMarker.lng),
        clickable: true,
        title: newMarker.url
      };
      var contentString = "<div id='img-info'><img src='"+newMarker.url+"'/><p>"+newMarker.username+"</p></div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var newMarker = new google.maps.Marker( newMarkerOptions)

      google.maps.event.addListener(newMarker, 'click', function() {
          infowindow.open(this.map,newMarker);
        });
    },





    renderClassifiedResult: function(results) {
      $(this.tagSpace).html("");
      var topics = results["cls1"]
      // below returns the largest value, not the key in the topics hash
      var max = Math.max.apply(null,
                              Object.keys(topics).map(function(k) {
                                      return topics[k];
                              }));
      var max_key = null

      $.each(topics, function(i, topic){
        if (topic === max) {
          max_key = i
        }
      })
      var stringMaxKey = ("<h3>The current most popular type of tag at this location is:</h3><p>"+ max_key+"</p>")

      $(this.tagSpace).append(stringMaxKey);
    }
  };
