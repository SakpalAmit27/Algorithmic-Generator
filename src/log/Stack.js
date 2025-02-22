

class Stack{ 

    constructor(){
        // container //
        this.container = []
    }


    // pushing the notes inside the stack // 

    push(notes){
        this.container.push(notes);
    }


    pop(){
        return this.container.length > 0 ? this.container.pop() : null;
    }

    peek(){
        return this.container.length > 0 ? this.containre[this.items.length - 1] : null; 
    }

    isEmpty(){

        return this.container.length === 0;
    }

    getStack(){

        return [...this.container];
    }

}

export default Stack;