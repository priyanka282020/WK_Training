const city = new Map([
    ["Andhra Pradesh" , "Hyderabad"],
    ["Maharashtra", "Mumbai"],
    ["Assam", "Dispur"],
    ["Bihar", "Patna"],
    ["Goa", "Panji"],
    ["Hariyana", "Chandigadh"]
])

console.log(city)

let key_itr = city.keys();
console.log(city.get(key_itr.next().value));
console.log(city.get(key_itr.next().value));
console.log(city.get(key_itr.next().value));
console.log(city.get(key_itr.next().value));
console.log(city.get(key_itr.next().value));
console.log(city.get(key_itr.next().value));
let last_key = key_itr.next().value;



console.log(typeof last_key);
console.log(city.get(last_key));