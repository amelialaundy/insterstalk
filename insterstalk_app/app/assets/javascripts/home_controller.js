function HomeController() {
  this.instagramSearch = new InstagramSearchObject();
  this.googleMapLocationSearch = new GoogleMapLocationSearchObject();
  this.uclassifySearch = new UclassifySearchObject();
  this.view = new View();
  this.allTags = [];
}

HomeController.prototype = {
  start: function() {
    this.bindEvents();
    this.view.initializeMap();
  },

  bindEvents: function() {
    $(this.view.searchButton).on("click", this.searchGoogleMapLocation.bind(this))
  },

  searchGoogleMapLocation: function(e) {
    this.allTags = [];
    e.preventDefault();
    var addressForSearch = this.view.getAddress();
    this.googleMapLocationSearch.search(addressForSearch.address, this.searchInstragram.bind(this))
  },

  searchInstragram: function(data) {
    var lat = data[0]['geometry']['location']['lat']
    var lng = data[0]['geometry']['location']['lng']
    this.view.setMapLatLng(lat, lng);
    this.instagramSearch.search(lat, lng, function(instagramSearchResults) {
      this.setUpGoogleMapMarkerObjects(instagramSearchResults);
    }.bind(this))
  },

  setUpGoogleMapMarkerObjects: function(instagramSearchResults) {
    this.createMarkers(instagramSearchResults)
    this.uclassifySearch.search(this.allTags.join(" "), this.renderTopics.bind(this))
  },

  createMarkers: function(instagramSearchResults) {
    $.each(instagramSearchResults, function(i, result) {
      var options = this.markerOptions(result);
      var newMarker = new markerObject(options);
      this.view.renderMapInstagramMarkers(newMarker);
      this.allTags.push(options['tags']);
    }.bind(this))
  },

  markerOptions: function(result) {
    return {
      lat: result['location']['latitude'],
      lng: result['location']['longitude'],
      userlink: result['link'],
      image: result['images']['thumbnail']['url'],
      username: result['user']['username'],
      tags: result['tags']
    }
  },

  renderTopics: function(data) {
      this.view.renderClassifiedResult(data);
  }

}
