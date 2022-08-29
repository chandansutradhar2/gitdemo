function add(a,b){
    return typeof(a)=="number" && typeof(b)=='number'?
    a+b:'please enter number only';

}

function subtract(a,b){
    return typeof(a)==="number" && typeof(b)==='number'?
    a-b:'please enter number only';

}



console.log(subtract(10,30));