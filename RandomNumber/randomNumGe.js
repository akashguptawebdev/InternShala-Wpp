const btn = document.querySelector(".btn");

btn.addEventListener("click" , ()=>{
    runPrompt();
})


function runPrompt(){
    let randm= Math.floor( Math.random()*10)

    let userInput = prompt("Enter number 1 to 10");
    
    if(userInput == randm){
        alert("Good Job")
    }else{
        runPrompt();
    }

}
