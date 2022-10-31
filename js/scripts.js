// Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object. Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.

//Business Logic
// Each destination will be an object
  //location:
  //landmarks:
  //time of year:
  //notes:
function Destination() {
  this.locations = {};
}

Destination.prototype.addLocation = function(location) {
  this.locations[location.name] = location;
};

Destination.prototype.findLocation = function(location) {
  if (this.locations[location] !== undefined ) {
    return this.locations[location];
  }
  return "You didn't go here, stupid."
};

function Location(name, landmark, timeOfYear, note) {
  this.name = name;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.note = note;
}

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] !== undefined) {
//     return this.contacts[id];
//   }
//   return false;
// };








  //UI
//Display properties when a user clicks