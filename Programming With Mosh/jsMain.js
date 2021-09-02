import { Teacher } from "./teacher";
// object destructuring 
const address = {
    city : 'quezon city',
    country : 'philippines',
    street : 'mayang pula'
};

address['city'] = 'manila';

const {city , country , street} = address;


console.log(city);



// spread operator (...)
const array1 = [1,34,5];
const array2 = [4,6,1,234];

const combined = [3423,552345,...array1,...array2];


console.log(combined);


const object1 = {
    name : 'john'
};

const object2 = {
    location : 'manila'
};

const ojbCombined = {
    ...object1,
    ...object2,
    jobTitle : 'programmer'
};

console.log(ojbCombined);



// Es6 classes
let teacher = new teacher('john','It');

