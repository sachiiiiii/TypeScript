// @ts-check

/**
 * Part 2: Fixing Existing Errors
 */
class Vehicle {
  // use a union of literals to declare valid status options
  // "started" or "stopped"
  status: "stopped" | "started" = "stopped";
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    // Properties do not exist on type 'Vehicle'
  }
  start(): void {
    this.status = "started";
  }
  stop(): void {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

// Change the printStatus function to accept a parameter of type Vehicle.
function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

// Fix errors in the output statements below the function definitions.
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
// Properties 'wheels' and 'model' do not exist on type 'Car'

/**
 * Part 3: Creating a Generic Class
 */

// Modify NCycle to accept a generic type.
class NCycle<T> {
  // use a union of literals to declare valid status options
  // "started" or "stopped"
  status: "stopped" | "started" = "stopped";

  // Allow make and model to have either the generic type or an array of the generic type.
  make: T | T[];
  model: T | T[];

  wheels: number;

  // Adjust the constructor parameters accordingly.
  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    // Properties do not exist on type 'Vehicle'
  }
  start(): void {
    this.status = "started";
  }
  stop(): void {
    this.status = "stopped";
  }
  // Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0).
  print(num: number = 0): void {
    //Use type guards and other appropriate techniques to log:
    //"This is a <make> <model> NCycle." if make and model are not arrays.
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a <${this.make}> <${this.model}> NCycle.`);
    }
    //"This NCycle has a <make> <model> at <parameter>."
    // if make and model are arrays and the index of parameter exists in each.
    else if (this.make[num] && this.model[num]) {
      console.log(
        `This NCycle has a <${this.make}> <${this.model}> at <${num}>.`
      );
    }
    // "This NCycle was not created properly." if neither of the above are true.
    else {
      console.log("This NCycle was not created properly.");
    }
  }

  // Create a new method printAll, which returns nothing and has no parameters.
  printAll(): void {
    // Use type guards and appropriate techniques to implement printAll such that it logs the same statements as print,
    // but for all matching pairs in the make and model arrays, if applicable.
    //"This is a <make> <model> NCycle." if make and model are not arrays.
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a <${this.make}> <${this.model}> NCycle.`);
    }
    //"This NCycle has a <make> <model> at <parameter>."
    // if make and model are arrays and the index of parameter exists in each.
    else if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let idx = 0; idx < this.make.length; idx++) {
        if (this.make[idx] === this.make[idx]) {
          console.log(`This NCycle has a <${this.make}> <${this.model}> at <${idx}>.`);
        }
      }
    }
    // "This NCycle was not created properly." if neither of the above are true.
    else {
      console.log("This NCycle was not created properly.");
    }
  }
}
