function addTask(event){
    let list = document.querySelector(".tasks");
    let tasks  = document.getElementsByClassName("task");
    let input = document.querySelector(`input[name="todo-text"]`);

    list.insertAdjacentHTML(
        "beforeend", 
        `<div class="task">
                    <div>${tasks.length+1} .  ${input.value} </div>
                        <button class="but"></button>
                        <button class="but1"></button>
                </div>`
    );
    }

    function checkTask(event) {
      let button = event.target.parentElement;
      button.style.textDecoration = "line-through";
    }
    function removeTask(event) {
      confirm("Вы действительно хотите удалить задачу?")
      event.target.parentNode.remove();
    }