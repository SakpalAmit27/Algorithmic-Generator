import * as Tone from 'tone'

import Stack from './Stack.js';

import scaleTransmit from './scaleTransmitter.js';



// instanced the noteStack lol // 

// const noteStack = new Stack();


const synth = new Tone.Synth().toDestination(); 



export const playRandomNote = () => {

  const selectedNote = scaleTransmit.getRandomNote(); 

  synth.triggerAttackRelease(selectedNote,"8n"); 

  console.log(`selected note : ${selectedNote}`); 

  return selectedNote;
};


export const changeScale = (newScale) => {
  scaleTransmit.setScale(newScale);
}


