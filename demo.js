function add(a,b){
    return typeof(a)=="number" && typeof(b)=='number'?
    a+b:'please enter number only';

}

function subtract(a,b){
    //todo:check if a and b is a number
    return typeof(a)=="number" && typeof(b)=='number'?
    a-b:'please enter number only';

}

function multiply(a,b){
	try{
	
    return typeof(a)=="number" && typeof(b)=='number'?
    a*b:'please enter number only';
	
	}catch(Exception e){
			console.log(e);
	}
}

console.log(subtract(10,30));