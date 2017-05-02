const scanf = require('scanf');

let inputs = [];

let inputCount = scanf("%d");
for(let i = 0; i < inputCount; i++){
    inputs[i] = scanf("%d");
}

let checkedMask = [];
let outputs = [];
for(let i = 0; i < inputs.length; i++){
    if(checkedMask[inputs[i]] === undefined){
        checkedMask[inputs[i]] = true;
        outputs.push(inputs[i]);
    }
}

console.log("Output is : %s", outputs.join(', '));