// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function fareMultiplier(fare) {
    return fare * integer;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return 
}

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
