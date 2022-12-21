import { assign, createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

import '../App.css';

function Counter() {

     const counterMachine = createMachine({
      context: { 
         // Here, we will define the initial state of the machine
         count: 0,      
      },
      on: {
        // Here we will define the events that will trigger the transitions.
        INCREMENT: {
            actions: assign({
              count: (context) => context.count + 1,
            }),
          },

        DECREMENT: {
            actions: assign({
              count: (context) => context.count - 1,
            }),
          },
      },
    });



  const [state, send] = useMachine(counterMachine);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{state.context.count}</h2>
      <button onClick={() => send('INCREMENT')}>Increment</button>
      <button onClick={() => send('DECREMENT')}>Decrement</button>
    </div>
  );
}

export default Counter;
