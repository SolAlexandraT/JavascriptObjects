let myDog = {
  name: "Scruffy",
  furColor: "grey",
  numberOfLegs: 4,
  numberOfEyes: 2,
  isAGoodBoy: false,
  age: 6,
  breed: "Mutt",
  bark: function () {
    console.log("woof");
  },
  birthhday: function () {
    this.age++;
    console.log(this.age);
  },
  hasWhatItTakes: function () {
    if (this.isAGoodBoy == true) {
      this.isAGoodBoy = false;
    } else if (this.isAGoodBoy == false) {
      this.IsAGoodBoy = true;
    }
  },
};
myDog.bark();
myDog.birthhday();
myDog.hasWhatItTakes();
