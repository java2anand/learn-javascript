const characterArr = [
    'Ajit',
    'Abhishek',
    'Alok',
    'Abhijeet',
    'Sorabh'
];

const copyArr = [...characterArr];
copyArr.splice(0,1);
copyArr.splice(copyArr.length,1,'Dimpi');

console.table(copyArr);