const determineAge = function (person) {
  if (person.hasOwnProperty("yearOfDeath")) {
    age = person.yearOfDeath - person.yearOfBirth;
  } else {
    age = new Date().getFullYear() - person.yearOfBirth;
  }
  return age;
};

const findTheOldest = function (people) {
  peopleDescendingAge = people
  .map(person => {
    return { name: person.name, age: determineAge(person) };
  })
  .toSorted((p1, p2) => p2.age - p1.age);
  
  return peopleDescendingAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
