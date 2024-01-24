
let list = {
    classes : [],
    attributes : [],
    items : [],
    addClass(className){
        this.classes.push(className);
    },
    addAttribute(attributeName, attributeValue){
        let attr = {
            name: "",
            value: ""
        }
        attr.name = attributeName;
        attr.value = attributeValue;
        this.attributes.push(attr);
    },
    addItem(item){
        this.items.push(item);
    },
    render(){
        let elemUl = document.createElement("ul");
        this.classes.forEach(function(elem){
            elemUl.classList.add(elem);
        });
        this.items.forEach(function(item){
            let elemLi = document.createElement("li");
            let a =  document.createElement("a");
            a.href = item.href;
            a.innerText = item.text;
            a.setAttribute('href', item.text);
            elemUl.append(elemLi);
            elemLi.append(a);
        });
        document.body.prepend(elemUl); 
    }
}
// list.addClass("Hello, world");
// console.log(list.classes);

// let item = {
//     text : "", //text=new String()
//     setText(text){  // setText: function(text){//     this.text = text;// }
//         this.text = text;
//     }
// }

// item.setText("Hello, world");
// console.log(item.text);

// list.addItem(item);

let texts = [
    {text :"str_link_1", href: "https://mystat.itstep.org"},
    {text :"str_link_2", href: "https://mystat.itstep.org"}, 
    {text :"str_link_3", href: "https://web.telegram.org"},
    {text :"str_link_4", href: "https://mystat.itstep.org"},
]
texts.forEach(function(text){
    let item = {
        text : "",
        href: "", 
        setText(text){  
            this.text = text;
        },
        setHref(href){
            this.href = href;
        }
    }
    
    item.setText(text.text);
    item.setText(text.href);
    list.addItem(item);
});

console.log(list);

list.addClass("list-unstyled");
list.addClass("list-inline");

list.render();
