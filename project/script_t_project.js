let m = document.querySelector(".menu");
let nav = document.querySelector(".main-menu");


if(m){
    m.addEventListener("click", (e) => {
        if(m.classList.contains("pushed")){
            m.classList.remove("pushed");
            nav.classList.remove("opened");
        }
        else{
            m.classList.add("pushed");
            nav.classList.add("opened");
        }
    });
}