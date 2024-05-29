let str = "khgk";

if(str.length>3){

    let lengthOfStr = str.length-1;
    let strArr = str.split("");
    let  newStr = strArr.splice(lengthOfStr-2 , lengthOfStr);
    let trimStr = newStr.join("");
    let manipulateStr = trimStr + str + trimStr;
    console.log(manipulateStr);

}