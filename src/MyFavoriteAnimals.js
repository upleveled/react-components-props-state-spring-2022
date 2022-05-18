import { useState } from 'react';

const animals = [
  {
    id: 1,
    icon: '🐢',
    name: 'turtle',
    size: '1m',
    age: 80,
    isFavorite: false,
  },
  {
    id: 2,
    icon: '🦁',
    name: 'lion',
    size: '2m',
    age: 10,
    isFavorite: false,
  },
  {
    id: 3,
    icon: '🦓',
    name: 'zebra',
    size: '1.5m',
    age: 5,
    isFavorite: false,
  },
];

export function MyFavoriteAnimals() {
  const [isFavorite, setIsFavorite] = useState(animals[0].isFavorite);
  return (
    <div style={{ border: 'solid 1px black' }}>
      <span>
        {animals[0].name}: {animals[0].icon}
      </span>
      <p>size: {animals[0].size}</p>
      <p>age: {animals[0].age}</p>
      <p>
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={(event) => {
            setIsFavorite(event.currentTarget.checked);
          }}
        />{' '}
        {isFavorite ? '❤️' : '🖤'}
      </p>
    </div>
  );
}
