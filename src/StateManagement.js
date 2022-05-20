import { useState } from 'react';

export default function StateManagement() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });

  return (
    <div>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'on' }
              : { status: 'broken' },
          )
        }
      >
        ON
      </button>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'off' }
              : { status: 'break' },
          )
        }
      >
        OFF
      </button>
      <button onClick={() => setLightbulb({ status: 'broken' })}>BREAK</button>
      <div>Lightbulb: {JSON.stringify(lightbulb)}</div>
    </div>
  );
}
