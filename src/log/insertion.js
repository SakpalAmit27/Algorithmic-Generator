

// @SakpalAmit27 : accepting notes as parms [ dynamically ]
export const insertionSort = (notes) => {

    let sortedNotes = [...notes]; // @SakpalAmit27 copy of notes // 


    for(let i = 1; i<sortedNotes.length; i++){

        let nextElement = sortedNotes[i]; 

        let previousElement = i - 1; 

        while(previousElement >= 0 && sortedNotes[previousElement] > nextElement){
            sortedNotes[previousElement + 1] = sortedNotes[previousElement];
            previousElement = previousElement - 1;
        }

        sortedNotes[previousElement + 1] = nextElement;
    }

    return sortedNotes;

}