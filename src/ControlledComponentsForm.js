import { useState } from 'react';

export default function ControlledComponentsForm() {
  // 1. Create a state variable
  const [email, setEmail] = useState('');

  return (
    <div>
      <label>
        Sign up for our newsletter
        <input
          type="email"
          // 2. Connect the state variable to the input
          value={email}
          onChange={(event) => {
            // 3. Update the value when the user changes
            // the text in the box
            setEmail(event.currentTarget.value);
          }}
        />
      </label>
      Email address entered: {email}
    </div>
  );
}
