import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transition when it is broken.
      },
    },
  },
});

// const initialLightbulbState = { status: 'on' };

export default function StateManagementXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <>
      <div>Lightbulb: {JSON.stringify(lightbulb.value)}</div>
      <div>
        <button onClick={() => send('TURN_ON')}>On</button>
        <button onClick={() => send('TURN_OFF')}>Off</button>
        <button onClick={() => send('BREAK')}>Break</button>
      </div>
    </>
  );
}
