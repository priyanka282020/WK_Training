const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");


console.log(letters);

letters.add("d");
letters.add("e");
console.log(letters);

//In Set Duplicate Element not added Twise.
letters.add("d");
letters.add("e");
console.log(letters);
