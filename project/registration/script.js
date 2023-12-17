
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
        list.insertAdjacentHTML(
            "beforeend",
            `<div class="card" draggable="true" ondragstart="startDrag(event) id="user-${now.getMilliseconds}">
            <img src="avatar.png" alt="">
            <div class="card-name">ФИО: ${name}</div>
            <div class="card-age">${age} лет</div>
            <div class="card-pol">Пол:${gender}</div>
            <div class="card-tel">Номер телефона:${phone}</div>
            <div class="card-email">Почта: ${email}</div>
            <div class="card-link">Ссылка: ${url}</div>
            <div class="card-address">Адрес: ${address}</div>
            <button type="button">Инфо</button>
        </div>`
        )
    }
    return false;
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
