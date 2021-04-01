const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['javascript', 'Ruby', 'C++']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['SQL', 'Go', 'Typescript', 'C#']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['PHP', 'Python']
}

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age} \n`)
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

const canVote = (person) => {
  const majority = 18
  return person.age >= majority ? true : false
}

console.log(canVote(alice))
console.log(canVote(charlie))
console.log(`\n`)

const mostSkilledDev = (person1, person2) => {
  return person1.language.length > person2.language.length ?
    `${person1.firstName}` : person2.language.length > person1.language.length ?
      `${person2.firstName}` : 'draw'
}
console.log(mostSkilledDev(alice, charlie))

