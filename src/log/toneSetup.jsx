import * as Tone from 'tone'


const synth = new Tone.Synth().toDestination(); 



export const playRandomNote = () => {

        
  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  const randomNote = notes[Math.floor(Math.random() * notes.length)]; 


  synth.triggerAttackRelease(randomNote,"8n");
}


