let myPetShop = {
    nameOfShop: "Domestic Critters", 
    typeOfPets: ["dogs:", "cats:"],
    typesOfBreeds: [ ["pomeranian", "poodle","chow chow", "german shepherd"] , ["tonkinese cat","doskoy","birman","ragamuffin"]],
    currentBreedTypes: function(){
        for(let i = 0; i<this.typesOfBreeds.length; i++){
        for(let j = 0; j< this.typesOfBreeds[i].length; j++){
            console.log(this.typesOfBreeds[i][j])
    }
}
for(let i = 0; i<this.typesOfBreeds.length; i++){
    console.log(this.typeOfPets[i])
for(let j =0; j< this.typesOfBreeds[i].length; j++){
    console.log(this.typesOfBreeds[i][j])
    }

}
    }
}

myPetShop.currentBreedTypes();   
    
