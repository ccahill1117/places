
function Place (name, location, notes) {
    this.name = name,
    this.location = location, //id
    this.notes = notes // haven't added anyhting
}

function ScrapBook() {
  this.places = [];
  this.currentId = 0;
}

ScrapBook.prototype.addPlace = function(place) {
  this.places.push(place);
  place.id = this.assignId();
  this.listPlaces();
  this.showPlaces();

}

ScrapBook.prototype.assignId = function() {
  return this.currentId += 1;
}

ScrapBook.prototype.showPlaces = function() {
  // this method adds pins to the map based on the places array
  var imageOffset = 30;
  $("#usa-map").empty();

  this.places.forEach(function(place) {

    onDotHover = function() {
      $("#notesArea span").empty();
      $("li#list-"+place.id).css('font-weight','700');
      $("#notesArea span").text(place.notes);
    }
    offDotHover = function() {
      $("li#list-"+place.id).css('font-weight','400');
      $("#notesArea span").empty();
    }

    var imageDot = '<img src="img/pin.png" style="position: fixed; top:'+(place.location.y-imageOffset)+'px; left: '+(place.location.x-imageOffset)+'px;" id="'+ place.id+'">';

    $("#usa-map").prepend(imageDot);
    $("img#"+place.id).hover(onDotHover,offDotHover);
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

// we instantiate our ScrapBook object here- called ourPlaces
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
