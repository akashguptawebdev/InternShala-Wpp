const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    print_current_page();
})

function print_current_page() {
    window.print();
} 
