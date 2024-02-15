//1
let names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']
names.forEach((name) => console.log(`Привет, ${name}!`))

//2
let numbers = [1, 2, 3, 4, 5]
let numbersX10 = numbers.map(x => x * 10)
console.log(numbersX10)

//3
let arr = [5, 12, 8, 130, 44] 
let filterArr = arr.filter(x => x > 10)
console.log(filterArr)

//4
let persons = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]
let personalData = persons.filter(person => person.age > 18).map(person => `${person.name} (${person.age} лет)`)
console.log(personalData)

//5
let products =  [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]
let sum = products.reduce((acc, product) => acc + product.price * product.quantity, 0)
console.log(sum)