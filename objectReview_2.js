//hotel objects
let myHotel = {
    guestFirstName: "",
    guestLastName: "",
    guestStayLength: 9999,
    guestRoomTypeOptions: ["Single", "Double", "Queen"],
    availableRooms: [ [100, 101, 102, 103] , [200, 201, 202], [301, 303] ],
    bookedRooms: [ [], [], [] ],
    guestRoomType: "",
    guestRoomIndex: 999999,
    selectedGuestRoom: 9999999,
    costOfRooms: [200, 250, 300],
    roomDropDownHTML: "",
    //roomTypes : function(){
    //roomStyles : function(){
    //priceNightly: function(){
    longStayPrice: function(){

// Make a for loop that outputs all the rooms on a separate line into the console.
    for (let i = 0; i < this.availableRooms.length; i++){
        for (let j = 0; j < this.availableRooms[i].length; j++){
            console.log(this.availableRooms[i][j])
        }
    }

    //Console log all the rooms with separated by the type of room ("single", "double", "queen")
    // so that each room is printed still on a separate line, but the room type preceds
    // the list of the rooms.
    

        for (let i = 0; i<this.availableRooms.length; i++){
            console.log(this.guestRoomTypeOptions[i])
        for (let j =0; j< this.availableRooms[i].length; j++){
            console.log (this.availableRooms[i][j])

        
        }
    }      

//Console log the price of the rooms on different lines in a string that says "Room 
//<ROOM-NUM> costs <COST> per night".
for (let i = 0; i<this.availableRooms.length; i++){
    console.log(this.guestRoomTypeOptions[i])
for (let j =0; j< this.availableRooms[i].length; j++){
    console.log (`Room ${this.availableRooms[i][j]} costs ${this.costOfRooms[i]} per night.`)


}
    
}
//Console log the price of the rooms on different lines in a string that says "Room <ROOM-NUM>
// is a <ROOM-TYPE> and costs <COST> per night".
for (let i = 0; i<this.availableRooms.length; i++){
    console.log(this.guestRoomTypeOptions[i])
for (let j =0; j< this.availableRooms[i].length; j++){
    console.log (`Room ${this.availableRooms[i][j]} is a ${this.guestRoomTypeOptions[i]} and costs ${this.costOfRooms[i]} per night.`)

}
}
for (let i = 0; i<this.availableRooms.length; i++){
    console.log(this.guestRoomTypeOptions[i])
for (let j =0; j< this.availableRooms[i].length; j++){
     console.log (`Room ${this.availableRooms[i][j]} will cost you ${this.costOfRooms[i] * 13} for 13 nights.`)

}  
}
}
   
}
//myHotel.roomTypes();
//myHotel.roomStyles();
//myHotel.priceNightly();
myHotel.longStayPrice();