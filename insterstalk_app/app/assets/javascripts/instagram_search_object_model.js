function InstagramSearchObject() {
  this.firstPartOfInstagramSearchUrl = "/instagram/location_search?lat="
  this.secondPartOfInstagramSearchUrl = "&lng="
}

InstagramSearchObject.prototype = {
  search: function(lat, lng, callback) {
    var url = this.firstPartOfInstagramSearchUrl + lat + this.secondPartOfInstagramSearchUrl + lng;
     var ajaxRequest = $.ajax({
      url: url,
      type: "GET",
      success: callback
    });
  }
}
