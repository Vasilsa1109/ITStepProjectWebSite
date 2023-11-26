//1 способ
// function summ(param1, param2){
//     let summ=param1+param2;

//     return summ;
// }

// console.log(summ(2, 4));

//2 способ
// let summ=function(param1, param2){
//         let summ=param1+param2;
    
//         return summ;
//     }
// console.log(summ('Hello ' , 'world'));

//Стрелочные функции
// let summ = (param1, param2) => {return param1+param2;}
// let summ = (param1, param2) =>  param1+param2;
// console.log(summ('Hello ' , 'world!'));

// function factorial(n){
//     let p = n;
//     let res=1;
//     for(let i=1; i<=p; i++)
//     {
//         res*=i;
//     }
//     return res;
// }
// console.log(factorial(3));

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return factorial(n-1)*n;
//     }
// }
// console.log(factorial(3));

// function start(){
//     {alert('Start!')};
// }
// setTimeout(start, 4000);

// setInterval(()=>{console.log(new Date())}, 5000);


//1
// function min(a, b){
//     if(a>b){
//         return b;
//     }
//     else{
//         return a;
//     }
// }
// console.log(min(2, 4));
// //2
// function st(numb, s){
//     return numb**s;
// }
// console.log(st(2, 3));
// //3
// function prim(c, d, zn){
//     if(zn=='+'){
//         return c+d;
//     }
//     if(zn=='-'){
//         return c-d;
//     }
//     if(zn=='*'){
//         return c*d;
//     }
//     if(zn=='/'){
//         return c/d;
//     }
// }
// console.log(prim(2, 3, '/'));
// //4
// function prost(numb1){
//     return (numb1 % 2 != 0)? alert("Простое число"):alert("Не является простым числом");
// }
// console.log(prost(4));
// //5
// function table(num){
//     for(let i=1; i<=10; i++)
//     {
//         console.log(num*i);
//     }
// }
// for(let i=2; i<=9; i++)
//     {
//         table(i);
//     }

// let human = {
//     age: 15, 
//     name: {
//         firstname: "Vasilisa",
//         lastname: "V"
//     },
//     pol: "female",
//     sayName: function(){
//         return this.name.firstname + " " + this.name.lastname;
//     },
//     sayAge(){
//         return this.age; //return human.age;
//     },
//     // "stazh let": 0
// };

// console.log(human.sayName());
// console.log(human.age);
// console.log(human['sayName']());
// // console.log(human['stazh let']);

// let stag=prompt("Введите ваш стаж работы");
// let stageName = "stage";
// human[stageName] = stag;
// // human.stag=stag;
// // delete human.age;
// // delete human.name.firstname;
// let changePol=function(pol){
//     this.pol = pol;
// }
// // function changePol(pol){
// //     this.pol = pol;
// // }
// human.changePol=changePol;
// human.changePol("male");
// console.log(human);
//функция конструктора
// function Student(name, age){
//     this.name = name;
//     this.age = age;

//     this.sayName = function(){
//         return this.name;
//     }
// }

// const student1 = new Student("Evgen", 16);
// const student2 = new Student("Alice", 15);

// student1.rating = 10;
// student1.getRating = function(){
//     return this.rating;
// }

// console.log(`My name is ${student1.sayName()}`);
// console.log(`My rating is ${student1.getRating()}`);

// class Group{
//     numberOfStudents;
//     numberOfClass;

//     constructor(numberOfStudents, numberOfClass){
//         this.numberOfStudents = numberOfStudents;
//         this.numberOfClass = numberOfClass;
//     }

//     getStudentsNumber(){
//         return `This group contain ${this.numberOfStudents} students`;
//     }
//     getClass(){
//         return `This group occupied ${this.numberOfClass} room`;
//     }
// }

// const group = new Group(13, 402);
// console.log(group.getClass());

let names=['Ivan', 'Petr', 'Sidr'];
// let counts=[1, "3", {name: "Ed"}]; - не стоит делать (с разными типами)
let counts=[1, 2, 3, 4, 5];
// counts[5] = 'Hello';
// counts[500] = 'Last';
counts.push('Godzilla');
console.log(counts);
console.log(counts.shift());
console.log(counts);
console.log(counts.unshift('Meow'));
console.log(counts);
counts.splice(3, 1, 'super');
console.log(counts);
console.log(counts.slice(0, 3))//первые 3 элемента
let newMassiv = names.concat(counts);
console.log(newMassiv);
// console.log(counts[counts.length-1]); //индекс последнего элемента,в данном случае возвращает Godzilla
// console.log(counts.length); //length возвращает последний индекс массива
// console.log(counts[400]); // underfined
counts.forEach(function(value, index, counts){
    console.log(`Number - ${value} : ${index}`);
});//callback - функции которые передаются в функции

let m = counts.map(function(value, index, counts)
{
    return value += ' ---- ';
});
console.log(m);
let l = counts.filter(function(item)
{
if(item>2)
{
    return true;
}
else
{
    return false;
}
});
console.log(counts);
console.log(l);

let str = 'This is string. Cool'; //new string
// console.log(str[3]);
// console.log(str.length);
// console.log(str);
// let M = str.split(' ');
// console.log(M);
// M[0]='That was';
// console.log(M);
// console.log(M.join(' '));
let replaced = str.replace("This", "That was");
console.log(replaced);
