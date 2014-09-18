function UclassifySearchObject() {
  this.url = "/uclassify/topic_search?search_query="
}

UclassifySearchObject.prototype = {
  search: function(searchQuery, callback) {
    var noCommas = searchQuery.replace(/,/g, "+")
    var noSpaces = noCommas.replace(/ +/g, "+")
    var url = this.url + noSpaces;
     var ajaxRequest = $.ajax({
      url: url,
      type: "GET",
      success: callback
    });
  }
}
