const characterArr = [
    'Ajit',
    'Abhishek',
    'Alok',
    'Abhijeet',
    'Sorabh'
];

const copyArr = [...characterArr];
const selected = copyArr.slice(0,2);

console.table(selected);