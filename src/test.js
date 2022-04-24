const animalArr = ['Dogs', 'Cats', 'Horses', 'Birds'];

const coolAnimalArr = animalArr.map(animal => {
//   console.log(coolAnimalArr);
  return `${animal} are really cool animals.`;
});

console.log(coolAnimalArr);