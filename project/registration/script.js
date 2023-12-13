
function addPerson(){
        let cardlist = document.querySelector(".card-list");
        let input = document.querySelector(`input[name="fio"]`);
        let input2 = document.querySelector(`input[name="birthday"]`);
        let input3 = document.querySelector(`select[name="pol"]`);
        let input4 = document.querySelector(`input[name="phone"]`);
        let input5 = document.querySelector(`input[name="email"]`);
        let input6 = document.querySelector(`input[name="GitHub"]`);
        let textarea = document.querySelector(`textarea[name="address"]`);
    cardlist.insertAdjacentHTML(
        "beforeend", 
        `<div class="card">
        <img src="avatar.png" alt="">
        <div class="card-name">${input.value}</div>
        <div class="card-age">${input2.value}</div>
        <div class="card-pol">${input3.value}</div>
        <div class="card-tel">${input4.value}</div>
        <div class="card-email">${input5.value}</div>
        <div class="card-link">${input6.value}</div>
        <div class="card-address">${textarea.value}</div>
        <button type="button">Инфо</button>
    </div>`
    );
}