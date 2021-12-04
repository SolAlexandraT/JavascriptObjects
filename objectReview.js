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
    roomTypes : function(){

    for(let i = 0; i < this.availableRooms.length; i++){
        for(let j = 0; j < this.availableRooms[i].length; j++){
            console.log(this.availableRooms[i][j])
        }
    }
        for(let i = 0; i<this.availableRooms.length; i++){
            console.log(this.guestRoomTypeOptions[i])
        for(let j =0; j< this.availableRooms[i].length; j++){
            console.log(this.availableRooms[i][j])
        }
            
}
    }

    
}
myHotel.roomTypes();