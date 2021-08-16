let user = [
  { id: 2, name: 'Peter' },
  { id: 1, name: 'Rob' },
  { id: 3, name: 'Andry' },
]
let car = [
  { id: 1, name: 'Ford' },
  { id: 3, name: 'Audi' },
  { id: 2, name: 'Merc' },
]

let result = user.map((e, index) => {
  return (index = {
    userName: e.name,
    carName: car.find((c) => e.id === c.id).name,
  })
})

console.log(result)
