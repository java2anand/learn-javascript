const DATA = [
    {id:1, title:'first'},
    {id:2, title:'second'},
    {id:3, title:'third'},
    {id:4, title:'fourth'},
    {id:5, title:'fifth'},
];

const upperDataa = DATA.map(el => ({title: el.title.toUpperCase(), id: el.id}));
const moduloData = DATA.map(el => el.id % 2 === 0);

console.table(upperDataa);
console.table(moduloData);