import { useState } from 'react';

export default function EventHandlers() {
  const [name, setName] = useState('');
  return (
    <>
      <button
        // The onClick prop allows us to pass a function
        // that will get run when we click
        onClick={() => alert('hello')}
      >
        Alert
      </button>
      <div />
      <input
        // This is also called a "Controlled Component", look
        // at the ControlledComponentsForm.js file for an
        // example
        value={name}
        // The onChange prop allows us to pass a function
        // that will get run when the user changes the
        // text in the box
        onChange={(event) => setName(event.currentTarget.value)}
      />
      Name: {name}
    </>
  );
}
