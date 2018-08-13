class ForagerBee extends HoneyMakerBee {
  // TODO.. 
  constructor(age = 10){
    super(age);
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(){
    this.treasureChest.push("treasure")
  }
};
