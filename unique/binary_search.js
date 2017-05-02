const scanf = require('scanf');

let inputs = [4, 2, 6, 4, 3, 5, 5];

// let inputCount = scanf("%d");
// for(let i = 0; i < inputCount; i++){
//     inputs[i] = scanf("%d");
// }

let searchTree = null;
const insert = (number) => {
    if(searchTree == null){
        searchTree = [number, null, null];
    }else if(searchTree[0] == number){
        return;
    }else if(searchTree[0] > number){
        if(searchTree[2] == null){
            searchTree[2] = [number, null, null];
        }else{
            insertRecursive(number, searchTree[2]);
        }
    }else{
        if(searchTree[1] == null){
            searchTree[1] = [number, null, null];
        }else{
            insertRecursive(number, searchTree[1]);
        }
    }
};

const insertRecursive = (number, tree) =>{
    if(tree[0] == number){
        return;
    }else if(tree[0] > number){
        if(tree[2] == null){
            tree[2] = [number, null, null];
        }else{
            insertRecursive(number, tree[2]);
        }
    }else{
        if(tree[1] == null){
            tree[1] = [number, null, null];
        }else{
            insertRecursive(number, tree[1]);
        }
    }
};

const find = (number) => {
    if(searchTree == null){
        return false;
    }else if(searchTree[0] == number){
        return true;
    }else if(searchTree[0] > number){
        return findRecursive(number, searchTree[2]);
    }else{
        return findRecursive(number, searchTree[1]);
    }
};

const findRecursive = (number, tree) => {
    if(tree == null){
        return false;
    }else if(tree[0] == number){
        return true;
    }else if(tree[0] > number){
        return findRecursive(number, tree[2]);
    }else{
        return findRecursive(number, tree[1]);
    }    
};

let outputs = [];
for(let i = 0; i < inputs.length; i++){
    if(!find(inputs[i])){
        insert(inputs[i]);
        outputs.push(inputs[i]);
    }
}

console.log("Output is : %s", outputs.join(', '));