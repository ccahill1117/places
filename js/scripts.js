
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
  this.listPlaces();
}

ScrapBook.prototype.assignId = function() {
  return this.currentId += 1;
}

ScrapBook.prototype.showPlaces = function() {
  var imageOffset = 30;
  $("#usa-map").empty();
  this.places.forEach(function(dot) {
    var imageDot = '<img src="img/pin.png" style="position: fixed; top:'+(dot.location.y-imageOffset)+'px; left: '+(dot.location.x-imageOffset)+'px;" id="'+ dot.id+'">';
    $("#usa-map").prepend(imageDot);
  })
}

ScrapBook.prototype.listPlaces = function() {
  $("#theList").empty();
  this.places.forEach(function(place) {
    
    onDotHover = function() {
      $("img#"+place.id).attr('src','img/pin-red.png');
    }
    offDotHover = function() {
      $("img#"+place.id).attr('src','img/pin.png');
    }

    $("#theList").append('<li id="list-'+place.id+'">'+place.name+'</li>');
    $("#list-"+place.id).hover(onDotHover,offDotHover)
  })
}

var ourPlaces = new ScrapBook();

//
function newLocationAdder(e) {

  $("#place-name").val("");
  $("#place-notes").val("");

  var capturedCoords = {x: e.clientX, y:e.clientY};
  var range = 13;

  $("#exampleModal").modal();

  $("#addLocation").click(function addLocationButton() {
    var placeName = $("#place-name").val();
    var placeNotes = $("#place-notes").val();

    ourPlaces.addPlace(new Place(placeName, capturedCoords, placeNotes))

    $("#addLocation").off("click", addLocationButton);
  });


}

$(function() {

  $("#add-places").click(function() {
    $("#usa-map").addClass("make-add");

    $("#usa-map").click(function(event) {
      newLocationAdder(event);

      $("#usa-map").removeClass("make-add")
      $("#usa-map").off("click");
    });


  })

  $("#show-places").click(function() {
    ourPlaces.showPlaces();
  })





})
