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

  // $("#myModal").click(function() {
  //   $("#exampleModal").modal();
  // })


  $("#usa-map").click(function(event) {

    console.log(event.clientX, event.clientY)

    var range = 13;
    var oregonX = 118 ;
    var oregonY = 243;

    var capturedCoords = {x: event.clientX, y:event.clientY};
    console.log(capturedCoords)

    record.push(new Place('test', capturedCoords));
    // debugger;

    if (event.clientX > oregonX - range &&  event.clientX < oregonX + range && event.clientY > oregonY - range &&  event.clientY < oregonY + range) {
      // var coords = {event.clientX, event.clientY};

      // $("#map-coords").text("you clicked "event.clientX, event.clientY);
      var modalText = "You clicked: " + event.clientX + " " + event.clientY;

      $("#map-coords").text(modalText);
      $("#exampleModal").modal();

      console.log('oregon')
    }
  })

})
