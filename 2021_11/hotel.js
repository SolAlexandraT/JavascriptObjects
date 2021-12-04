let availableRooms = [
    {name:'Hampton', roomNumber: 106, price: 146, size: 'king'},
    {name:'Holiday Inn', roomNumber: 308, price: 210, size: 'king'},
    {name:'Hilton ', roomNumber: 400, price: 250, size: 'king'},
    {name:'Comfort Inn', roomNumber: 211, price: 120, size: 'queen'},
    {name:'Motel 6', roomNumber: 102, price: 76, size: 'twin'},
    {name:'Super 8', roomNumber: 434, price: 84, size: 'queen'},
    {name:'Zen Living', roomNumber: 310, price: 102, size: 'twin'}
    ];  
    
  
  let reservedRooms = []
  
  function bookRoom(hotelName){
  
  for(let i = 0; i < availableRooms.length; i++){
    if(hotelName == availableRooms[i]['name']){


  reservedRooms.push(availableRooms.splice(i, 1).pop());
   
    }
  }
  
  console.log(reservedRooms);
  }
  
  bookRoom('Motel 6')
  
  
  function returnRoom(hotelName){
    
    for(let i = 0; i < reservedRooms.length; i++){
     if(hotelName == reservedRooms[i]['name']){ 
     
  availableRooms.push(...reservedRooms.splice(i, 1));
    }  
  }
  
  console.log(availableRooms);
  
  }
  
  returnRoom('Motel 6')
  
  
  