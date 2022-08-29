function add(a,b){
    return typeof(a)=="number" && typeof(b)=='number'?
    a+b:'please enter number only';

}

function subtract(a,b){
    return typeof(a)==="number" && typeof(b)==='number'?
    a-b:'please enter number only';

}


function multiply(a,b){
	try{
        return typeof(a)==="number" && typeof(b)==='number'?
        a*b:'please enter number only';
	}catch(Exception){
			console.log(Exception);
	}
}

console.log(subtract(10,30));