import { useState } from 'react';

export default function StateIsAsync() {
  const [title, setTitle] = useState('First Title');
  // use JS

  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() => {
          // update state
          console.log('before set state', title);

          const newState = 'Updated Title';

          setTitle(newState); // Asynchronous

          console.log('after set state', newState);
        }}
      >
        click me to update the title
      </button>
    </div>
  );
}
