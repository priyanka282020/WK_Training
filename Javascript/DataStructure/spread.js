const city=["pune","satara","mumbai","surat","indor","bhopal","kalkatta","chandigadh"];

console.log(city)

const newcity = ["nanded", "pcmc",...city, "kolhapur"] //we can add all element from array to new array just spreading them 
console.log(newcity)

const person = {
  firstName: "Nagaraj",
  lastName: "Ravinuthala",
  age: 45,
  address: "Hyderabad",
};

const employee = { ...person, location: "Bangalore", job: "Consultant" };
console.log(person);
console.log(employee);