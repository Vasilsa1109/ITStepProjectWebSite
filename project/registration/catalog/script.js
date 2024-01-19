let page = 0; //выборка с ресурса
document.addEventListener("DOMContentLoaded", () => {
    loadContent();
})
function loadContent(){
    let xhr = new XMLHttpRequest();
    let url = new URL("http://jey.of.by/");
    if(page>0){
        url.searchParams.set("page", page);
    }
    xhr.open("GET", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function(){
        if(xhr.status!=200){
            alert(`Ошибка ${xhr.status} : ${xhr.statusText}`);
        }
        else{
            let products = xhr.response;
            renderProducts(products);
            page+=1;
        }
    }
}

function renderProducts(products){
    if(products.length > 0){
        let products = document.getElementsByClassName("products")[0];
        let productsCode = '';
        products.forEach((product) => {
        let price = (product.prices.new>0) ? `<h2 class="price">${product.prices.new} </h2><h2 class="old-price">${product.prices.old} </h2>` : `<h2 class="price">${product.prices.old} </h2>`;
        productsCode +=` <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>Название</h3>
        <p>${product.tieser.slice(0,90)}...</p>
        <h2>${price}</h2>
        <div class="buttons">
            <button><a href="">Подробнее</a></button>
            <button><a href="">В корзину</a></button>
        </div>
        </div>`
    })};
    productsList.insertAdjacentHTML("beforeend", productsCode);
    page+=1;
}