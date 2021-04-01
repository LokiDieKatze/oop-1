class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(`first name: ${this.firstName}\nlast name: ${this.lastName}\nage: ${this.age}\ndev languages: ${this.language}\n`)
  }
  canVote() {
    const majority = 18
    console.log(this.age >= majority ? true : false)
    console.log(`\n`)
  }
  mostSkilledDev(person2) {
    console.log(this.language.length > person2.language.length ?
      `${this.firstName}` : person2.language.length > this.language.length ?
        `${person2.firstName}` : 'draw')
  }
}

exports.Human = Human