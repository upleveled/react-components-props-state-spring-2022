import { useState } from 'react';

function ResetButton(props) {
  return (
    <button
      onClick={() => {
        props.setInputName('My Title');
      }}
    >
      {' '}
      reset
    </button>
  );
}

function Form(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Name:{' '}
        <input
          onChange={(event) => {
            props.setInputName(event.currentTarget.value);
          }}
          value={props.inputName}
        />
        {/* When we pass a function as a value we dont use parenthesis ()  */}
      </label>
    </form>
  );
}

export default function LiftingStateUp() {
  const [inputName, setInputName] = useState('My Title');
  // Is a method that we use to communicate in between sibling components

  return (
    <div>
      <h1>{inputName}</h1>
      <Form inputName={inputName} setInputName={setInputName} />
      <ResetButton setInputName={setInputName} />
    </div>
  );
}
