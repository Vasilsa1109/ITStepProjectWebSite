function hello(name){
    console.log("Hello", $(name));
}
hello("John");

// console.dir($("body"));

let body = $("body");
let css = ({
    backgroundColor: "lightblue",
    fontSize: '30px'
});
body.css(css);
// body.text("Hello from JQuery");
// body.html("<h1>Hello</h1>");
body.append("<h1>Hello 1 </h1>")
body.prepend("<h1>Hello 2 </h1>")

function hide(){
    $("h1").fadeOut(1500, function(){
        body.css({backgroundColor: "lightgreen"});
    });
    $('.ul li').each(function(){
        $(this).css({fontSize: `${Math.random() * 50} px`})});
}
