const scanf = require('scanf');

let inputs = [4, 2, 6, 4, 3, 5, 5];

// let inputCount = scanf("%d");
// for(let i = 0; i < inputCount; i++){
//     inputs[i] = scanf("%d");
// }


let checkedMask = [];
const getIndex = (number) => {
    return {
        block: Math.floor(number / 32),
        offset: number % 32
    };
}

const setBit = (number) => {
    const {block, offset} = getIndex(number);
    
    if(checkedMask[block] === undefined){
        checkedMask[block] = 0;
    }

    checkedMask[block] = checkedMask[block] | (1 << offset);
}

const getBit = (number) => {
    const {block, offset} = getIndex(number);

    if(checkedMask[block] === undefined){
        return false;
    }

    let val = (checkedMask[block] >> offset) & 0x01;
    return val === 1;
}

// Assume that we have 32 bit number in JS. (Safe integer has 53 bit)
let outputs = [];
for(let i = 0; i < inputs.length; i++){
    if(!getBit(inputs[i])){
        setBit(inputs[i]);
        outputs.push(inputs[i]);
    }
}

console.log("Output is : %s", outputs.join(', '));