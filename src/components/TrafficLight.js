import React from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

import '../App.css';


const greenLightOn = () => console.log('Green light is on');
const greenLightOff = () => console.log('Green light is off');
const yellowLightOn = () => console.log('Yellow light is on');
const yellowLightOff = () => console.log('Yellow light is off');
const redLightOn = () => console.log('Red light is on');
const redLightOff = () => console.log('Red light is off');

const lightMachine = createMachine({
  id: 'light',
  initial: 'red',
  states: {
    green: {
      on: {
        TIMER: 'yellow',
      },
      entry: ['greenLightOn'],
      exit: ['greenLightOff'],
    },
    yellow: {
      on: {
        TIMER: 'red',
      },
      entry: ['yellowLightOn'],
      exit: ['yellowLightOff'],
    },
    red: {
      on: {
        TIMER: 'green',
      },
      entry: ['redLightOn'],
      exit: ['redLightOff'],
    },
  },

  actions: {
    greenLightOn,
    greenLightOff,
    yellowLightOn,
    yellowLightOff,
    redLightOn,
    redLightOff,
  }
});


function TrafficLight() {
  const [current, send] = useMachine(lightMachine);

  return (
    <div>
      <div className={`light ${current.value === 'green' ? 'green' : ''}`} />
      <div className={`light ${current.value === 'yellow' ? 'yellow' : ''}`} />
      <div className={`light ${current.value === 'red' ? 'red' : ''}`} />
      <button onClick={() => send('TIMER')}>Next</button>
    </div>
  );
}


export default TrafficLight;