// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  }
}

const fareDoubler = function createFareMultiplier(fare) {
  return fare * 2
}

const byTwo = createFareMultiplier(2)

byTwo(10)
// function returnFirstTwoDrivers(drivers) {
//   return drivers.slice(0, 2)
// }
//
// const myfunc = () => {
//
// }
//
// console.log(myfunc.name)

// function returnFirstTwoDrivers() {
//   const myVar = function myFunc(drivers) {
//     return drivers.slice(0, 2);
//   }
//   return myVar;
// }

// const newDrivers = function returnFirstTwoDrivers(drivers) {
//   return drivers
// }
