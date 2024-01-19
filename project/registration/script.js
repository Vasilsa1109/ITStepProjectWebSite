
// function addPerson(){
//         let cardlist = document.querySelector(".card-list");
//         let input = document.querySelector(`input[name="fio"]`);
//         // let input2 = new Date();
//         let input2 = document.querySelector(`input[name="birthday"]`);
//         let input3 = document.querySelector(`select[name="pol"]`);
//         let input4 = document.querySelector(`input[name="phone"]`);
//         let input5 = document.querySelector(`input[name="email"]`);
//         let input6 = document.querySelector(`input[name="GitHub"]`);
//         let textarea = document.querySelector(`textarea[name="address"]`);
//         // let date = new Date();
//     cardlist.insertAdjacentHTML(
//         "beforeend", 
//         `<div class="card">
//         <img src="avatar.png" alt="">
//         <div class="card-name">Имя: ${input.value}</div>
//         <div class="card-age">${date-input2.value}</div>
//         <div class="card-pol">Пол:${input3.value}</div>
//         <div class="card-tel">Номер телефона:${input4.value}</div>
//         <div class="card-email">Почта: ${input5.value}</div>
//         <div class="card-link">Ссылка: ${input6.value}</div>
//         <div class="card-address">Адрес: ${textarea.value}</div>
//         <button type="button">Инфо</button>
//     </div>`
//     );
// }

// console.dir(window);
// let name = "c";
// let showname = null;
// if(window.localstorage.geItem("name")){
//    window.localstorage.setItem("name", name);
// }
// showname= window.localstorage.getItem("name")
// alert("Hello, ${showname}");

// console.dir([]);

if(window.localStorage.getItem("users"))
{
  let users = JSON.parse(window.localStorage.getItem("users"));
  let cardList = document.getElementsByClassName("card-list")[0];

  if(cardList){
    if(users.length > 0){
      cardList.innerHTML = "";

      users.forEach(function(user){
        let newCard = `<div class="card" draggable="true" ondragstart="drag.start(event)" id="${user.id}">
                      <img src="avatar.png" alt="" ondragstart="event.preventDefault()"/>
                      <div class="card-name">${user.name}</div>
                      <div class="card-age">Возраст: ${user.age} лет</div>
                      <button type="button" onclick="editUser(${user.id})">Инфо</button>
                  </div>`;
        cardList.insertAdjacentHTML("beforeEnd", newCard);
      });
    }
  }
}

function sendForm(event){
    let error = {};
    let address = event.target[6].value;
    if(address.length < 10){
        error.address="Ваш адрес слишком короток";
        let addressfield = document.getElementById("address-error");
        addressfield.innerHTML = error.address;
        addressfield.previousElementSibling.classList.add("error");
    }
    else{
        let addressfield = document.getElementById("address-error");
        addressfield.innerHTML = "";
        addressfield.previousElementSibling.classList.remove("error");
    }
    let name = event.target[0].value;
    let nameTemplate = /^[А-Я][а-яА-Я\s]*[а-я]$/;
    if(!nameTemplate.test(name)){
        error.name="Введите ФИО в нужном формате";
        let namefield = document.getElementById("name-error");
        namefield.innerHTML = error.name;
        namefield.previousElementSibling.classList.add("error");
    }
    else{
        let namefield = document.getElementById("name-error");
        namefield.innerHTML = "";
        namefield.previousElementSibling.classList.remove("error");
    }
    let phone = event.target[3].value;
    let phoneTemplate = /^\+375[0-9]{9}$/g; 
    if(!phoneTemplate.test(phone)){
        error.phone="Введите номер телефона(+375XXXXXXXXX)";
        let phonefield = document.getElementById("phone-error");
        phonefield.innerHTML = error.phone;
        phonefield.previousElementSibling.classList.add("error");
    }
    else{
        let phonefield = document.getElementById("phone-error");
        phonefield.innerHTML = "";
        phonefield.previousElementSibling.classList.remove("error");
    }
    let date = event.target[1].value;
    let gender = event.target[2].value;
    let email = event.target[4].value;
    let url = event.target[5].value;

   let errors = 0;

    for(key in error){
        errors++;
    }

    if(errors){
        return false;
    }
    else{
        let list = document.getElementsByClassName("card-list")[0];
        console.log(list);
        let now = new Date();
        let birthday =  new Date(date);
        let age = now.getFullYear() - birthday.getFullYear();
        let id = Math.floor(Math.random() * 1000);
        list.insertAdjacentHTML(
            "beforeend",
            `<div class="card" draggable="true" ondragstart="startDrag(event) id="user-${id}">
            <img src="avatar.png" alt="">
            <div class="card-name">ФИО: ${name}</div>
            <div class="card-age">${age} лет</div>
            <div class="card-pol">Пол:${gender}</div>
            <div class="card-tel">Номер телефона:${phone}</div>
            <div class="card-email">Почта: ${email}</div>
            <div class="card-link">Ссылка: ${url}</div>
            <div class="card-address">Адрес: ${address}</div>
            <button type="button" onclick="editUser(${user.id})">Инфо</button>
        </div>`
        );
        // let userData = 'user-${id&$(event.target[0].value)&$(event.target[1].value)&$(now.getFullYear() - birthday.getFullYear()}&${event.target[2].value)&$(event.target[3].value)&$(event.target[4].value)&$(event.target[5].value)&$(event.target[6].value)'
        let user = {
            id: id,
            name: event.target[0].value,
            birthday: event.target[1].value,
            age: now.getFullYear() - birthday.getFullYear(),
            pol: event.target[2].value,
            phone: event.target[3].value,
            email: event.target[4].value,
            url: event.target[5].value,
            address: event.target[6].value
        }
        let users = [];
        if(window.localStorage.getItem("users")){
            users = JSON.parse(window.localStorage.getItem("users"));
        }
        users.push(user);
        window.localStorage.setItem("users", JSON.stringify(users))


        // let userData = JSON.stringify(user);
        
        // window.localStorage.setItem("user", userData);
        // window.localStorage.setItem("id", `user-${id}`);
        // window.localStorage.setItem("name", event.target[0].value);
        // window.localStorage.setItem("birthday", event.target[1].value);
        // window.localStorage.setItem("age", now.getFullYear() - birthday.getFullYear());
        // window.localStorage.setItem("pol", event.target[2].value);
        // window.localStorage.setItem("phone", event.target[3].value);
        // window.localStorage.setItem("email", event.target[4].value);
        // window.localStorage.setItem("url", event.target[5].value);
        // window.localStorage.setItem("adress", event.target[6].value);
    }
    return false;
}
function editUser(id){
    let list = document.getElementsByClassName("card-list")[0];
    let changes = {
        id: id,
        new_name: name,
        new_age: age
    }
    list.insertAdjacentHTML(
        "beforeend",
        `<div class="card" draggable="true" ondragstart="startDrag(event) id="user-${id}">
        <img src="avatar.png" alt="">
        <div class="card-name">ФИО: ${new_name}</div>
        <div class="card-age">${new_age} лет</div>
        <div class="card-pol">Пол:${new_gender}</div>
        <div class="card-tel">Номер телефона:${new_phone}</div>
        <div class="card-email">Почта: ${new_email}</div>
        <div class="card-link">Ссылка: ${new_url}</div>
        <div class="card-address">Адрес: ${new_address}</div>
        <button type="button" onclick="editUser(event)">Инфо</button>
    </div>`)
    users.push(changes);
}

function startDrag(event){
    event.dataTransfer.setData("text/html", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

function enterDrag(event){
    // event.preventDefalt();
    event.dataTransfer.dropEffect = "move";
    event.target.classList.add("active");
}

function leaveDrag(event){
    event.target.classList.remove("active");
}

function endDrag(event){
    let c = document.getElementsByClassName("icon")[0];
    if(confirm("вы действительно хотите удалить карточку?")){
        let ElementId = event.dataTransfer.getData("text/html");
        let el = document.getElementById(ElementId);
    }
}

let drag = {
    el(e, className) {
      let el = e.target;
  
      while (!el.classList.contains(className)) {
        el = el.parentElement;
      }
  
      return el;
    },
    start(e) {
      let el = this.el(e, "card");
      e.dataTransfer.setData("text/html", el.id);
      e.dataTransfer.effectAllowed = "move";
    },
    enter(e) {
      e.preventDefault();
      this.el(e, "card-remove").classList.add("active");
      e.dataTransfer.dropEffect = "move";
    },
    over(e) {
      this.enter(e);
    },
    leave(e) {
      this.el(e, "card-remove").classList.remove("active");
    },
    drop(e) {
      let backet = this.el(e, "card-remove");
  
      if (confirm("Вы действительно хотите удалить карточку?")) {
        let cardList = document.getElementsByClassName("card-list")[0];
        let cards = document.getElementsByClassName("card");
        let card = document.getElementById(e.dataTransfer.getData("text/html"));
  
        if (card) {
          card.remove();
          backet.classList.remove("active");
          backet.classList.add("action");
          setInterval(() => {
            backet.classList.remove("action");
          }, 500);
  
          if (cards.length <= 0) {
            cardList.innerHTML = "<p>Список пока пуст</p>";
          }
        }
      } else {
        this.leave(e);
      }
    },
  };