import { useState } from 'react';

export default function ControlledComponent() {
  const [inputName, setInputName] = useState('My Title');
  // 1. Create a State Variable for the value
  // 2. Attach the Update of this variable into an onChange callback using event.currentTarget.value
  // 3. set The Value of the element as the State variable

  return (
    <div>
      <h1>{inputName}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Name:{' '}
          <input
            onChange={(event) => {
              setInputName(event.currentTarget.value);
            }}
            value={inputName}
          />
          <button
            onClick={() => {
              setInputName('My Title');
            }}
          >
            reset
          </button>
        </label>
      </form>
    </div>
  );
}
