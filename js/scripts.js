function Place (name) {
  // , location, landmark, timeOfYear, notes
    this.name = name
    // this.location = location,
    // this.landmark = landmark,
    // this.timeOfYear = timeOfYear,
    // this.notes = notes
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




  $("#usa-map").click(function(event) {
    console.log($("#add-box").prop("checked"));

    console.log(event.clientX, event.clientY)

    var range = 13;
    var oregonX = 118 ;
    var oregonY = 243;

    if (event.clientX > oregonX - range &&  event.clientX < oregonX + range && event.clientY > oregonY - range &&  event.clientY < oregonY + range) {
      console.log('oregon')
    }
  })

})
