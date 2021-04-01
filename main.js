//on importe les classes
const { Point } = require('./point')
const { Human } = require('./classInfo')

//on défini les objets 
const p1 = new Point(9, 13)
const p2 = new Point(16, 18)

//on appelle les fonctions
p1.show()
p1.isEqual(p2)
p1.distance(p2)

//on défini les objets
const alice = new Human(
  'Alice', 'Liddell', 28, ['javascript ', 'Ruby ', 'C++'])

const bob = new Human(
  'Bob', 'Lemon', 30, ['SQL ', 'Go ', 'Typescript ', 'C#'])

const charlie = new Human(
  'Charlie', 'Charlot', 8, ['PHP ', 'Python ']
)

//on appelle les fonctions
alice.printInfo()
bob.printInfo()
charlie.printInfo()

alice.canVote()
bob.canVote()
charlie.canVote()

alice.mostSkilledDev(bob)
bob.mostSkilledDev(charlie)
charlie.mostSkilledDev(alice)
