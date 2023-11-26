
// x=5;
// console.log(x);
// x=x+5;
// console.log(x);
// var y;
// y="This is string";
// var y=5;
// console.log(y);

// let z =[];
// // let z = "This is string";
// const PI=['Apple', 'Orange'];
// // PI.push('Strawberry');
// // PI.pop();
// console.log(PI);
// let str="Pasha";
// function hello(){
//     let str="lena";
//     console.log("hello,"+ str);
//     str="Misha";
//     console.log("hello,"+ str);
// }
// hello();
// function goodMorning(name){
//     alert("Good Morning, " + name);
// }
// goodMorning(str);

// // var str;
// // hello(a);

// // var a="Misha";
// // возведение в степень - **

// let c=8;
// let d=5;
// if((c>d) && (c>0) && (c%2==0) ){
//     console.log(c)
// }
// else{
//     console.log(c)
// }
// if(c==d) {
//     console.log(c)
// }
// else{
//     console.log(c)
// }
// let z = (c==d) ? console.log(c):console.log(d); //тернарная операция, через двоеточие - что делать если не выполняется условие
// console.log(z);

// == - сравнивает два операнда с приведением типов(сравнение строки и числа, строка к числу)
// === проверяет равенство без приведения типов
// >==
// <==

// let fruit = prompt("Введите название фрукта");
// switch(fruit){
//     case 'Огурец':
//         alert(fruit+" это овощь");
//         break;
//     case 'Апельсин':
//         alert(fruit+" это фрукт");
//         break;
//     default:
//         alert(fruit+" - это неизвестно");
//         break;
// }

    // case (age>=16) && (age<21):
    //     alert("Это подросток");
    // case  (age>=21) && (age<70)
    //     alert("Это взрослый");
    // case (age>=70)
    //     alert("Это пенсионер");

//7 основных типов данных JS

// let v = true; //false
// // let b = new Boolean(true);
// // console.log(b);

// let numb=4;
// // let numb=new Number(4);
// // NaN - когда не получается число, not a number
// console.log(parseInt('10'));

// let m; //когда не присвоили значение - underfined
// console.log(m);
// typeof m; //функция для определения типа
// console.log(m);

// let s="This is string";
// let d=`This is string ${numb}`;
// console.log(d);
// `` //дает возможность в строку добавлять переменные
// console.log(s.length);
// console.log(NaN==NaN); //result = false

// let f=null; //пустой результат
// console.log(typeof f); //тип значения является объектом

// let o = {}; //object
// let o = new Object;

// let s = new Symbol();

// let counter = -1;
// while(counter>=0){
//     console.log(counter);
//     counter-=3;
// }

// do {
//     console.log(counter);
//     counter--;
// }
// while(counter>=0)

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     // continue;
// }

// let mass= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(mass[1]);
// for (index in mass) {
//     console.log(index); вывод индексов элементов
// }
// for (index of mass) {
//     console.log(index); вывод самих элементов
// }
// for (index in mass) {
//     console.log(mass[index]**2); 
// }

// let numb=prompt("Введите число");
// console.log(numb**2);

// let numb1= +prompt("Введите число 1");
// let numb2= +prompt("Введите число 2");//чтобы получить в переменной число
// alert((numb1+numb2)/2);

// let a= +prompt("Введите сторону квадрата");
// alert(a*a);

// let s= +prompt("Введите расстояние в км");
// const miles=s*0.621371;
// alert(miles);

// let numb1= +prompt("Введите число 1");
// let numb2= +prompt("Введите число 2");
// alert(`Сумма : ${numb1+numb2}`);
// alert(`Разность :  ${numb1-numb2}`);
// alert(`Умножение : ${numb1*numb2}`);
// alert(`Деление : ${numb1/numb2}`);

//  let a= +prompt("Введите число a");
//  let b= +prompt("Введите число b");
//  let x= -b*a;
//  let F = a*x+b==0;
//  alert(`x = ${x}`);

//  let h= +prompt("Введите кол-во часов");
//  let m= +prompt("Введите кол-во минут");
//  let dayH=24
//  let dayM=60;
//  alert(`${dayH-h}  ч ${dayM-m} мин  осталось до следующего дня `);

// let numb= +prompt("Введите трёхзначное число");
// let secondNumb=Math.floor(numb/10)%10;
// alert("Вторая цифра числа = " + secondNumb);

// var numb= +prompt("Введите пятизначное число");
// var res=0;
// res=numb%10;
// numb=numb/10;
// alert("Новое число - " + res);

const z=250;
per=0.1;
let numb= +prompt("Введите общую сумму продаж за месяц");
let zarpl=z+(0.1*numb);