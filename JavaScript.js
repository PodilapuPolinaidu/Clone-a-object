const person = {
  name: "Polinaidu",
  Age: 21,
};
const clonePerson = Object.assign({}, person);
document.write(clonePerson);
clonePerson.name = "Upendra";
clonePerson.Age = 23;
document.write(`${clonePerson.name}<br>`);
document.write(`${clonePerson.Age}<br>`);
document.write(`${person.name}<br>`);
document.write(person.Age);
