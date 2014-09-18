function GoogleMapLocationSearchObject() {
  this.googleQuerySearchUrl = "/google/address_search?address="
}

GoogleMapLocationSearchObject.prototype = {
  search: function(address, callback) {
    var addressForGoogleQuery = address.replace(/ /g, "+")
    var url = this.googleQuerySearchUrl + addressForGoogleQuery;
     var ajaxRequest = $.ajax({
      url: url,
      type: "GET",
      success: callback
    });
  }
}
