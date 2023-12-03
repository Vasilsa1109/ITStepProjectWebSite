function addTask(event){
    let list = document.querySelector(".tasks");
    let tasks  = document.getElementsByClassName("task");
    let input = document.querySelector(`input[name="todo-text"]`);

    list.insertAdjacentHTML(
        "beforeend", 
        `<div class="task">
                    <div>${tasks.length+1}, ${input.value}</div> 
                    <button class="but"></button>
                    <button class="but1"></button>
                </div>`
                );
}