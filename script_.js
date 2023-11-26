function Rect(x1, y1, x2, y2){

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;
}

let rect=new Rect(2,5,5,2);

function getInfo(rectangle){
    console.log(`
    x1=${rectangle.x1},
    y1=${rectangle.y1},
    x2=${rectangle.x2},
    y2=${rectangle.y2},
    `)
}
function getWidth(rectangle){
    console.log(`
    Ширина = ${rectangle.x2 - rectangle.x1}
    `)
}
function getHeight(rectangle){
    console.log(`
    Высота = ${rectangle.y1 - rectangle.y2}
    `)
}
function getSq(rectangle){
    console.log(`
    Площадь = ${(rectangle.y1 - rectangle.y2)*(rectangle.x2 - rectangle.x1)}
    `)
}
function getPer(rectangle){
    console.log(`
    Периметр = ${2*((rectangle.y1 - rectangle.y2)+(rectangle.x2 - rectangle.x1))}
    `)
}
function changeWidth(rectangle, x){
    console.log(`
    Новая ширина = ${(rectangle.x2 - rectangle.x1)+x}
    `)
}
function changeHeight(rectangle, y){
    console.log(`
    Новая высота = ${(rectangle.y1 - rectangle.y2)+y}
    `)
}
function changeHeightAndWidth(rectangle, x, y){
    console.log(`
    Новые значения: 
    x = ${(rectangle.x2 - rectangle.x1)+x},
    y = ${(rectangle.y1 - rectangle.y2)+y}
    `)
}
function changeX(rectangle, X){
    console.log(`
    Новые значения: 
    x1 = ${(rectangle.x1+X)},
    x2 = ${(X+rectangle.x2)}
    `)
}
function changeY(rectangle, Y){
    console.log(`
    Новые значения: 
    y1 = ${(rectangle.y1+Y)},s
    y2 = ${(Y+rectangle.y2)}
    `)
}
function changeXY(rectangle, X, Y){
    console.log(`
    Новые значения: 
    x1 = ${(rectangle.x1+X)},
    x2 = ${(X+rectangle.x2)},
    y1 = ${(rectangle.y1+Y)},
    y2 = ${(Y+rectangle.y2)}
    `)
}
function IsInside(rectangle, X, Y){
    if(((Y<rectangle.y1)&&(Y>rectangle.y2))&&((X>rectangle.x1)&&(X<rectangle.x2))){
        console.log(`Содержит точку с координатами ${X} , ${Y}`);
    }
    else{
        console.log(`Не содержит точку с координатами ${X} , ${Y}`);
    }
}
getInfo(rect);
getWidth(rect);
getHeight(rect);
getSq(rect);
getPer(rect);
changeWidth(rect, 4);
changeHeight(rect, 5);
changeHeightAndWidth(rect, 3, 6);
changeX(rect, 4);
changeY(rect, 3);
changeXY(rect, 3, 2);
IsInside(rect, 6, 7);
IsInside(rect, 3, 3);
IsInside(rect, 3, 6);
IsInside(rect, 2.4, 4.5);