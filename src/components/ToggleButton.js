import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import React from 'react';

// Define the state machine
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});

function ToggleButton() {
  // Use the useMachine hook to create a toggle state machine instance
  const [state, send] = useMachine(toggleMachine);

  // Render the button with the current state of the machine
  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'inactive' ? 'Activate' : 'Deactivate'}
    </button>
  );
}

export default ToggleButton;