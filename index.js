// // index.js

// // Import the Distance module
// const Distance = require('./distance.js');

// // Example usage:
// let valueToConvert1 = 75;
// let result1 = Distance.calculate('feet', valueToConvert1);
// console.log(`${valueToConvert1} feet is ${result1} meters.`);

// let valueToConvert2 = 33;
// let result2 = Distance.calculate('meters', valueToConvert2);
// console.log(`${valueToConvert2} meters is ${result2} feet.`);

// let valueToConvert3 = 15;
// let result3 = Distance.calculate('miles', valueToConvert3);
// console.log(`${valueToConvert3} miles is ${result3} kilometers.`);

// let valueToConvert4 = 98;
// let result4 = Distance.calculate('kilometers', valueToConvert4);
// console.log(`${valueToConvert4} kilometers is ${result4} miles.`);

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
  function calculate(req, res) {
    let unit = req.query.unit;
    let value = req.query.value;
    let message;
    switch (unit) {
      case 'feet':
        message = feetToMeters(value);
        break;
      case 'meters':
        message = metersToFeet(value);
        break;
      case 'miles':
        message = milesToKm(value);
        break;
      case 'kilometers':
        message = kmToMiles(value);
        break;
      default:
        message = "Invalid unit";
    
       break;
      }
      res.status(200).send(message.toString());
  }

  module.exports = {
    calculate
    
     
  
  };

 

