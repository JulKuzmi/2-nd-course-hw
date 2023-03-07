//задача1
/*
let a =10;
alert(10);
alert(20);

//задача2
let yearOneIphone = 2007;
alert(2007);

//задача3
let nameBrendanEich ='Brendan Eich';
alert('Brendan Eich');

//задача4
let one =10;
let two =2;
alert(10+2);
alert(10-2);
alert(10*2);
alert(10/2);

//задача5
let b =2;
let result =2**5;
alert(2**5);

//задача6
let d =9;
let f =2;
alert(9%2);

//задача7
let num =1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

//задача8
let age =prompt('Сколько вам лет?');
alert(age);

//задача9.0, 9.1, 9.2, 9.3
const user ={
    name: 'Julia',
    age: 22,
    isAdmin: true,
};

//добавляем новое свойство
user.cityOfResidence = true;
// изменяем возраст
user.age = 23;

console.log(user)

delete user.cityOfResidence;

//задача 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?", user);
alert(user[info]);

//задание 10
let userName = prompt('Введите как вас зовут?');
alert('Привет,'+ userName);
*/

//hw-3
// задание 1 
let password =prompt('Введите пароль');
if (password==='мой пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно'); 
}

// задание 2
let c =7;
if (c > 0 && c < 10 ){
    console.log('Верно');
}   else (c < 0 && c > 10);{
    console.log('Неверно');
}
//задание 3
let d =17;
let e =200;
if (d < 100 || e > 200) {
    console.log('Верно');
} else {
   console.log('Неверно'); 
}
//задача 4 ?// не уверена что сделала верно, но алерт выводит 5)
let a = '2';
let b = '3';
/*alert(a + b);*/
alert(a=b=5);

// задача 5
let monthNumber = String(prompt('Ведите номер месяца'));
monthNumber = monthNumber.toLocaleLowerCase();
switch (monthNumber) {
    case '1':
        console.log('Зима')
        break;
    case '2':
        console.log('Зима')
        break
    case '3':
        console.log('Весна')
        break
    case '4':
        console.log('Весна')
        break
    case '5':
        console.log('Весна')
        break
    case '6':
        console.log('Лето')
        break
    case '7':
        console.log('Лето')
        break
    case '8':
        console.log('Лето')
        break
    case '9':
        console.log('Осень')
        break
    case '10':
        console.log('Осень')
        break
    case '11':
        console.log('Осень')
        break
    case '12':
        console.log('Зима')
        break
    default:
        if(monthNumber>13);
        alert('Такого не существует');
        break;
}


