function UclassifySearchObject() {
  this.url = "/uclassify/topic_search?search_query="
}

UclassifySearchObject.prototype = {
  search: function(searchQuery, callback) {
    var sanitzedUri = searchQuery.replace(/,/g, "+").replace(/ +/g, "+").replace(/[^\x00-\x7F]/g, "")
    var url = this.url + sanitzedUri;
     var ajaxRequest = $.ajax({
      url: url,
      type: "GET",
      success: callback
    });
  }
}
