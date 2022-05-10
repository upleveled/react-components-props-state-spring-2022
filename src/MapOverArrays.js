const fruits = ['Banana', 'Kiwi', 'Papaya', 'Mango'];
const fruitsObjects = [
  { id: 1, name: 'Banana', description: 'This is a description for Banana' },
  { id: 2, name: 'Kiwi', description: 'This is a description for Kiwi' },
  { id: 3, name: 'Papaya', description: 'This is a description for Papaya' },
  { id: 4, name: 'Mango', description: 'This is a description for Mango' },
  { id: 5, name: 'Guayaba', description: 'This is a description for Guayaba' },
  { id: 6, name: 'Lemon', description: 'This is a description for Lemon' },
  { id: 7, name: 'Avocado', description: 'This is a description for Avocado' },
  { id: 8, name: 'Lulo', description: 'This is a description for Lulo' },
  { id: 9, name: 'Orange', description: 'This is a description for Orange' },
  { id: 10, name: 'Guama', description: 'This is a description for Guama' },
  {
    id: 11,
    name: 'Tamarindo',
    description: 'This is a description for Tamarindo',
  },
  { id: 12, name: 'Apple', description: 'This is a description for Apple' },
];

export default function MapOverArrays() {
  // const listOfFruits = [
  //   <li key="Banana">Banana</li>,
  //   <li key="Kiwi">Kiwi</li>,
  //   <li key="Papaya">Papaya</li>,
  //   <li key="Mango">Mango</li>,
  // ];

  // Map is a method that don't mutate the original array, don't modify the length of the array

  const listOfFruitsFromMap = fruitsObjects.map((fruitObject) => {
    return (
      <li key={fruitObject.id}>
        <h2> {fruitObject.name}</h2>
        <p>{fruitObject.description}</p>
      </li>
    );
  });

  const listOfFruitsFromMapFromString = fruits.map((fruit) => {
    return <li key={fruit}>{fruit}</li>;
  });

  console.log(listOfFruitsFromMap);

  return (
    <>
      <h1>from string array</h1>
      <ul>{listOfFruitsFromMapFromString}</ul>
      <h1>from object array</h1>
      <ul>{listOfFruitsFromMap}</ul>
    </>
  );
}
