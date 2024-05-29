let date = new Date(Date.now())
let toDay =date.getDay()
let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;

let dateFormate = `${hours} ${ampm} : ${minutes} : ${seconds}`;




switch(toDay){
    case 1:
        console.log("Today is : Monday")
        break;
    case 2:
        console.log("Today is : Tuesday")
        break;

    case 3:
        console.log("Today is : Wednesday")
        break;
    case 4:
        console.log("Today is : Thrusday")
        break;
    case 5:
        console.log("Today is : Friday")
        break;
    case 6:
        console.log("Today is : Sataurday")
        break;
    case 7:
        console.log("Today is : Sunday")
}

console.log("Current time is: ", dateFormate)
