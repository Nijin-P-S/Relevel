let miles = [1,2,3,4,5,6];

let totalDistanceInKilometers = miles.map(element => element*2.5).reduce(function(accumulator, element){ return accumulator+element},0);

console.log(totalDistanceInKilometers);