function add(a,b){
    return a+b;
}

function subtract(a,b){
    //todo:check if a and b is a number
    return typeof(a)=="number" && typeof(b)=='number'?
    a-b:'please enter number only';

}

console.log(subtract(10,30));