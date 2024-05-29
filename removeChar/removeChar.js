const btn = document.querySelector(".btn")
const userInput = document.querySelector("#userInput");
const displayResult = document.querySelector(".result");
btn.addEventListener("click", ()=>{
    fatchUserInput();
})


 function fatchUserInput(){
   let value = userInput.value;
    let index = parseInt(prompt("Enter index which you want to remove"), 10);

    let result = value.split("");
    if (!isNaN(index) && index >= 0 && index < result.length) {
        result.splice(index, 1);
    } else {
        alert("Invalid index. Please enter a valid number within the range.");
        return;
    }
    console.log(result)
    console.log(typeof result)
    
    let finalResult = result.join("");
    displayResult.innerHTML = finalResult;
 }