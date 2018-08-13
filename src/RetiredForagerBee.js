class RetiredForagerBee extends HoneyMakerBee {
  // TODO..
  constructor (age = 40){
    super(age);
    this.job = "gamble";
    this.canFly = false;
    this.color = "grey"
    this.treasureChest = [];
  }
  forage(){
    return "I am too old, let me play cards instead"
  }
  gamble(){
    this.treasureChest.push("treasure")
  }

};
