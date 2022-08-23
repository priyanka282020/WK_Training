const cars = ["Audi", "Volvo", "BMW"];
let car = cars[0];

cars.push("Thar , Suzuki");
console.log(cars);

cars.pop();
console.log(cars);





// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

fruits[fruits.length] = "Kiwi";
console.log(fruits);





//Concating Arrays

const myGirl = ['kiwi','puja','chandni'];
const myBoy = ['jitu','Akshay','Akash','Darshan'];
const gender = myGirl.concat(myBoy);
console.log(gender)






//Slicing
const f = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const res = f.slice(3);
console.log(res);





//Sorting
const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.sort();
console.log(fr);



//Reverse
const vehicals = ["Car","Truck","Scooty","Jeep"];
vehicals.sort();
vehicals.reverse();
console.log(vehicals);






//Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(
    function(a, b)
    {
        return a - b
    });
console.log(points);












