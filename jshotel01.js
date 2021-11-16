let hotel = { 
    hotelName: "JavaScript Hotel",
    myFirstName: "Solange",
    myLastName: "Thomas", // you don't need a comma after your last object
    roomTypes: ["Single", "Double", "Queen"],
    availableRoomNumbers: [[101, 102, 103], [201, 202, 203], [301, 302, 303]],
    roomPrices: [100, 150, 250],
    lengthOfStay: 4,
    guestName: "Bubba"
 }

 for(let i =0; i < hotel.roomTypes.length; i++){
     // Single, Double...
     console.log(`${hotel.roomTypes[i]} rooms:`)

     for(let j = 0; j <hotel.availableRoomNumbers.length; j++){
         // room numbers: 101, 102..
         console.log(hotel.availableRoomNumbers[i][j])        
     }
 }
 