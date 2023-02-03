import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import React from 'react';
import '../App.css';

// Define the state machine
const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'red',
  states: {
    red: {
      on: { NEXT: 'green' },
    },
    green: {
      on: { NEXT: 'yellow' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
  },
});

function TrafficLightBasic() {
  // Use the useMachine hook to create a traffic light state machine instance
  const [state, send] = useMachine(trafficLightMachine);

  // Render the traffic light based on the current state of the machine
  return (
    <div>
      <div className={state.value === 'red' ? 'light red' : 'light'} />
      <div className={state.value === 'yellow' ? 'light yellow' : 'light'} />
      <div className={state.value === 'green' ? 'light green' : 'light'} />
      <button onClick={() => send('NEXT')}>Next</button>
    </div>
  );
}

export default TrafficLightBasic;
