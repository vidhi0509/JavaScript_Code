const rest = new Map();
rest.set('name', 'Classico');
rest.set(1, 'Firenze Italy');
rest.set(2, 'Lisbon Portugal');
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)

console.log(rest.get('name'));
console.log(rest.get(2));
console.log(rest.has('categories'));
rest.delete('2')
console.log(rest.size); 
// rest.clear();
const arr = [1, 2]
rest.set(arr, 'Test');