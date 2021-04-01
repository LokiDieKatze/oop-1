class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    console.log(this.x === point.x && this.y === point.y ? true : false)
  }
  distance(point) {
    console.log(Math.sqrt(Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2)))
  }
}

exports.Point = Point
