

class scaleTransmitter{

    constructor(){
        this.scales = {
            "C Major": ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
            "D Major": ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5"],
            "A Minor": ["A4", "B4", "C4", "D4", "E4", "F4", "G4"],
            "G Major": ["G4", "A4", "B4", "C4", "D4", "E4", "F#4"],
    };

    // @SakpalAmit27 - default selected scale will be Dmaj // 
    this.currentSelectedScale = "D Major";
    }

    
    // incase setting a newScale // 

    setScale(scaleName){
        if(this.scales[scaleName]){
            this.currentSelectedScale = scaleName;
        }
        else{
            console.error(`scale : ${scaleName} not found !`);
        }
    }
    

    
}