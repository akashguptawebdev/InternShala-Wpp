
let number = 6

function CheckDiv(number){

    if(number % 3 === 0 || number % 7 === 0){
        return true;
    }else{
        return false;
    }
}
console.log((CheckDiv(5)));
console.log((CheckDiv(35)));