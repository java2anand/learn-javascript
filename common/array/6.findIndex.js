const DATA = [
    {id:1, title:'first'},
    {id:2, title:'second'},
    {id:3, title:'third'},
    {id:4, title:'fourth'},
    {id:5, title:'fifth'},
];

const itemIndx = DATA.findIndex(el => el.id == 2);
console.log(itemIndx);