let rentalCarAgency = {
    rentalPrice: [25, 35, 45, 75], //this is the price per day
    rentalClass: ["Economy", "Mid-Size", "Full-Size", "Luxury"],
  bookedCars: [],
  rentalInsurance: [true, false], //if someone does want insurance, it's an extra 10$/day regardless of the rental class
   
    
    customerCheckIn: function(rc, days, hasInsurance) {
console.log('The cars that are booked' )


    let rentalClassIndex = this.rentalClass.indexOf(rc)
    this.bookedCars.push(...this.rentalClass.splice(rentalClassIndex, 1));
  
   let totalPrice = 0
   if(hasInsurance == true){
   totalPrice += 10 * days
   }
totalPrice = totalPrice + (days * this.rentalPrice[rentalClassIndex])
console.log(totalPrice)
console.log(this.bookedCars)
console.log(this.rentalClass)
     return totalPrice 

        // METHODS are functions inside of an OBJECT
     //this function will return the total cost of booking a certain type of car for a certain number of days. Also pass in a boolean for whether or not the renter wants the car to have insurance.
    },  
   customerCheckOut: function(rentalClass) {
   console.log('The cars that are returned')

    this.rentalClass.push(...this.bookedCars.splice(rentalClass, 1));
console.log(this.bookedCars)
console.log(this.rentalClass)
  //return the car to the dealership by moving it back to the appropriate array
  }


    
  }
  rentalCarAgency.customerCheckIn('Economy', 2 , true)
  rentalCarAgency.customerCheckOut('Economy')