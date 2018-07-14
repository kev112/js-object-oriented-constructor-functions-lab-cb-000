// Scooter with year, color, and model properties
// Driver with name, age, and experience properties
// PickupLocation with address and city properties

class Scooter(year, color, model) {
  constructor(year, color, model) {
    this.year: year
    this.color: color
    this.model: model
  }
}

function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;
}
