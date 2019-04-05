// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
    constructor (props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
    }

    volume(){return this.length * this.width * this.height;}

    surfaceArea(){ return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);}
}

class CubeMaker extends CuboidMaker1{
    constructor (props) {
    super(props)
    }
    volume(){return Math.pow(this.length, 3) ;}
    surfaceArea(){return (Math.pow(this.length,2)) * 6 ;}
}

  const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5,
  });

  const cube1 = new CubeMaker({
      length: 5
  })

console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130
console.log(cube1.volume()); // 100
console.log(cube1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.