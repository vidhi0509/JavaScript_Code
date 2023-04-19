const orderSet = new Set(['pasta', 'pizza', 'noodles', 'pizza']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pasta'));
console.log(orderSet.has('bread'));
orderSet.add('garlic bread');
console.log(orderSet);
orderSet.delete('pasta');
console.log(orderSet);

for (const order of orderSet) console.log(order);

// to delete a complete set
// orderSet.clear();

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

let staffUnique = new Set(staff);
console.log(staffUnique);
// converting set into an array
staffUnique = [...new Set(staff)];
console.log(staffUnique);