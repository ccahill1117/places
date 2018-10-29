
function Place (name, location, notes) {
    this.name = name,
    this.location = location,
    this.notes = notes
}

function ScrapBook() {
  this.places = [];
  this.currentId = 0;
}

ScrapBook.prototype.addPlace = function(place) {
  this.places.push(place);
  place.id = this.assignId();
}

ScrapBook.prototype.assignId = function() {
  return this.currentId += 1;
}

ScrapBook.prototype.showPlaces = function() {
  var imageOffset = 30;
  $("#usa-map").empty();
  this.places.forEach(function(dot) {
    var imageDot = '<img src="img/pin.png" style="position: fixed; top:'+(dot.location.y-imageOffset)+'px; left: '+(dot.location.x-imageOffset)+'px;">';
    $("#usa-map").prepend(imageDot);
  })

}

var ourPlaces = new ScrapBook();
//

$(function() {

  $("#show-places").click(function() {
    ourPlaces.showPlaces();
  })

  $("#usa-map").click(function(event) {
    $("#place-name").val("");
    $("#place-notes").val("");

    var capturedCoords = {x: event.clientX, y:event.clientY};
    var range = 13;

    $("#exampleModal").modal();

    $("#addLocation").click(function addLocationButton() {
      var placeName = $("#place-name").val();
      var placeNotes = $("#place-notes").val();

      ourPlaces.addPlace(new Place(placeName, capturedCoords, placeNotes))

      $("#addLocation").off("click", addLocationButton);
    });


  })

})
