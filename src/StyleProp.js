import { useState } from 'react';

export default function StyleProp() {
  const [height, setHeight] = useState(100);
  return (
    <>
      <button onClick={() => setHeight(200)}>200</button>
      <button onClick={() => setHeight(300)}>300</button>
      <div
        style={{
          backgroundColor: 'green',
          color: 'white',
          height: height,
        }}
      >
        Height will change
      </div>
    </>
  );
}
