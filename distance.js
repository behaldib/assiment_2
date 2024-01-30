// distance.js

// Function 1: Convert feet to meters
function feetToMeters(feet) {
    return feet * 0.3048; // 1 foot = 0.3048 meters
  }
  
  // Function 2: Convert meters to feet
  function metersToFeet(meters) {
    return meters * 3.28084; // 1 meter = 3.28084 feet
  }
  
  // Function 3: Convert miles to kilometers
  function milesToKm(miles) {
    return miles * 1.60934; // 1 mile = 1.60934 kilometers
  }
  
  // Function 4: Convert kilometers to miles
  function kmToMiles(km) {
    return km * 0.621371; // 1 kilometer = 0.621371 miles
  }
  
  // Function 5: Calculate based on unit and value
  function calculate(unit, value) {
    switch (unit.toLowerCase()) {
      case 'feet':
        return feetToMeters(value);
      case 'meters':
        return metersToFeet(value);
      case 'miles':
        return milesToKm(value);
      case 'kilometers':
        return kmToMiles(value);
      default:
        return "Invalid unit";
    }
  }

  module.exports = {
    calculate
  };