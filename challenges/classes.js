// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

CuboidMaker.prototype.volume = function(){
    return this.length * this.width * this.height; 
  }

CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
  }


  ////// Class
class CuboidMakerClass {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height; 
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    volume() {
        return this.length * this.width * this.height;
    }
}

let cubeClass = new CuboidMakerClass(4, 5, 5); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubeClass.volume()); // 100
console.log(cubeClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log('///// Stretch results')
class CubeMaker extends CuboidMakerClass {
  constructor(length, width, height) {
    super(length, width, height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
let cube = new CubeMaker(4, 5, 5); 
console.log(cube.volume(), ' <-- volume()')
console.log(cube.surfaceArea(), ' <-- surfaceArea()')





