const names  = ['Abhi', 'Anand'];
const [firstName, lastName] = names;

console.log(firstName);

const address = {
    'names': 'Abhishek',
    'vill': 'khash',
    'pin' : 854318,
    'married': true
}

const {names:newName, married, ...rest} = address;

console.log(newName);
console.log(married);
console.log(rest);