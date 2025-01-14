const person = { name: "Alice", age: 25, city: "Paris" };

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    // Check if the property is not from prototype chain
    console.log(`${key}: ${person[key]}`);
  }
}

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

Object.values(person).forEach((value) => {
  console.log(value);
});

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
