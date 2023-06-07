var name = 'Abhi';

function displayName()
{
    console.log(this.name);
}

const Person = {
    name : 'JC',
    method : displayName.bind(this)
}

Person.method();