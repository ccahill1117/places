var record = []

function Place (name, location) {
  // , location, landmark, timeOfYear, notes
    this.name = name
    this.location = location
    // this.location = location,
    // this.landmark = landmark,
    // this.timeOfYear = timeOfYear,
    // this.notes = notes
    console.log('new place added!')
    console.log(record)
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


$(function() {
  $("#test").click(function(event) {
    $("#addLocation").on( "click" , function() {console.log('added')});
  });


  $("#usa-map").click(function(event) {

    var capturedCoords = {x: event.clientX, y:event.clientY};
    var range = 13;
    // var oregonX = 118 ;
    // var oregonY = 243;

    // console.log(capturedCoords)

    // $("#map-coords").text(modalText);
    $("#exampleModal").modal();

    $("#addLocation").click(function() {
      $("#place-name").val("");

      var newPlace = $("#place-name").val()
      console.log(newPlace)

      record.push(new Place(newPlace, capturedCoords));
      $("#addLocation").off( "click" );


    });





    // if (event.clientX > oregonX - range &&  event.clientX < oregonX + range && event.clientY > oregonY - range &&  event.clientY < oregonY + range)
  })

})
