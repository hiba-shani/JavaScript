const students = [
    { name: 'hiba', age: 23, grade: 'A' },
    { name: 'fida', age: 25, grade: 'A' }
]
// accessing datas
console.log(students[0].name);
console.log(students[1].age);

// looping through object file
students.forEach(students => {
    console.log(`${students.name} is ${students.age} years old`);

})