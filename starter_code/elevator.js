class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
  }

  start() {
    setInterval(() => this.update(); 1000  )
  };

  stop() { }
  update() {
     this.log();
    }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
  if((this.floor + 1 ) < this.MAXFLOOR){
    this.floor += 1;
  }else console.log("The last floor is the 10th")
  }
  floorDown() { }
  call() { }
  log() {
     console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    }
}

module.exports = Elevator;
