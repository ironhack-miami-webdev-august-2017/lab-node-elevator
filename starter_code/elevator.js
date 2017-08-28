class Elevator {
  constructor() {
    // floor where the elevator currently is
    this.floor      = 0;

    // current direction that the elevator is moving in
    // ("up" or "down")
    this.direction = 'up';

    // top floor of the building (max value of "this.floor")
    this.MAXFLOOR   = 10;

    // an array of person objects
    // represent people on the elevator waiting to be dropped off
    this.passengers = [];

    // an array of person objects
    // represents people waiting to be picked up
    this.waitingList = [];

    // an array of numbers of the floors which the elevator must stop
    // (either to drop off or pick up)
    this.requests = [];
  }


  start() {
    // begin a setInterval that calls "update()" every second
  }

  stop() {
    // cancel the setInterval started by "start()"
  }

  update() {
    // (for now) will only call "log()"
  }

  log() {
    // displays the current direction and current floor
    // Examples:
    // "Direction: down | Floor 3"
    // "Direction: up   | Floor 5"
  }


  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
}

module.exports = Elevator;
