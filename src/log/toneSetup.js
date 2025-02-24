import * as Tone from 'tone'

import Stack from './Stack.js';



// instanced the noteStack lol // 

const noteStack = new Stack();


const synth = new Tone.Synth().toDestination(); 



export const playRandomNote = () => {

        
  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  const randomIndex = Math.floor(Math.random() * notes.length);
  const selectedNote = notes[randomIndex]; // f @SakpalAmit27
  
  


  synth.triggerAttackRelease(selectedNote,"8n");

  // noteStack.push(randomNote); 

  console.log("selected note : ",selectedNote); 

  return selectedNote;

  
}

export const getPlayedNotes = () => {

  return noteStack.getStack();
}



