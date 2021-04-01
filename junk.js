class Person {
  constructor(name, departure, destination) {
    this.name = name
    this.from = departure
    this.to = destination
  }
  run() {
    return `${this.name} is running from ${this.from} to ${this.to}`
  }
}
const sarah = new Person('Sarah', 'Hambourg', 'Paris')
console.log(sarah)
