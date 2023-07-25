const $addTodo = document.getElementById("addTodo");

$addTodo.addEventListener("keypress", (e)=>{
    if(e.code === "Enter"){
        console.log(e);
    }
})