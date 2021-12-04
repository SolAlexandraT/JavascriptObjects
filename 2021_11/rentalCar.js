let rentalCars = [
  {carType:'economy', carNumber: 1357, price: 60 },
  {carType:'sedan', carNumber: 1013, price: 70},
  {carType:'luxury', carNumber: 1619, price: 200},
  {carType:'coupe', carNumber: 2225, price: 120},
  {carType:'convertible', carNumber: 2831, price: 90},
  {carType:'truck', carNumber: 3437, price: 84},
  {carType:'van', carNumber: 4043, price: 102}
  ];
 // Write two functions such that a user can reserve cars and then return them based off of the carNumber
let bookedCars = []
function reserveCars(carNumber){
  for(i =0; i < rentalCars.length; i++){
    if(carNumber == rentalCars[i]['carNumber']){
      bookedCars.push(rentalCars.splice(i,1));
    }
  }
console.log('the cars that are reserved are');
console.log(bookedCars);
}
reserveCars(3437)
reserveCars(4043)

function returnCars(carNumber){
  for(i = 0; i< bookedCars.length;i++){
    if(carNumber == bookedCars[i['carNumber']]){
      rentalCars.push(...bookedCars.splice(i,1));
    }
  }
  console.log('the cars that are being returned are');
  console.log(rentalCars);
}
returnCars(3437)
returnCars(4043)