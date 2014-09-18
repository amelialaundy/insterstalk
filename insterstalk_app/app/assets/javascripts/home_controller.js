function HomeController() {
  this.instagramSearch = new InstagramSearchObject();
  this.googleMapLocationSearch = new GoogleMapLocationSearchObject();
  this.uclassifySearch = new UclassifySearchObject();
  this.view = new View();
}

HomeController.prototype = {
  start: function() {
    console.log("start function home controller")
    this.bindEvents();
    this.view.initializeMap();
  },

  bindEvents: function() {
    console.log("binding")
    $(this.view.searchButton).on("click", this.searchGoogleMapLocation.bind(this))
  },

  searchGoogleMapLocation: function(e) {
    console.log(e)
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
    var allTags = this.createMarkers(instagramSearchResults)
    this.uclassifySearch.search(allTags.join(" "), this.renderTopics.bind(this))
  },

  createMarkers: function(instagramSearchResults) {
    var allTags = []
    $.each(instagramSearchResults, function(i, result) {
      var lat = result['location']['latitude']
      var lng = result['location']['longitude']
      var link = result['link']
      var imgLink = result['images']['thumbnail']['url']
      var username = result['user']['username']
      var tags = result['tags']
      var newMarker = new markerObject(lat, lng, imgLink, link, username)
      this.view.renderMapInstagramMarkers(newMarker);
      allTags.push(tags);
    }.bind(this))
    return allTags
  },

  renderTopics: function(data) {
      this.view.renderClassifiedResult(data);
  }

}
