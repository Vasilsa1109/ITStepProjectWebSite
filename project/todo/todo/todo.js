function addTask(){
    let list = document.querySelector(".tasks");
    let tasks  = document.getElementsByClassName("task");
    let input = document.querySelector(`input[name="todo-text"]`);

    if(input.value.trim() != ""){
            list.insertAdjacentHTML(
            "beforeend", 
            `<div class="task">
                        <div>${tasks.length+1}.  ${input.value} </div>
                            <button class="but"></button>
                            <button class="but1"></button>
                    </div>`   
        );
    }
    else{
        alert("Enter a value");
    }
}
    function checkTask(event) {
    //   let button = event.target.parentElement;
    //   button.style.textDecoration = "line-through";
    event.target.previousElementSibling.style.textDecoration = "line-through";
    }

    function removeTask(event) {
      if(confirm("Вы действительно хотите удалить задачу?")){
        event.target.parentElement.remove();
      }}

    //   event.target.parentNode.remove();
