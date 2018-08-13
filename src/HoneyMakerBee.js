class HoneyMakerBee extends Bee {
  // TODO..
  constructor (age = 10){
    super(age);
    this.job = "make honey";
    this.honeyPot = 0;
  }
  
  makeHoney(){
    this.honeyPot++;
  }
  giveHoney(){
    this.honeyPot--;
  }
};
