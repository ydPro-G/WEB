//  变量与常量
// 定义变量，赋值
let message = 'hello!';
alert(message);
// 定义常量，赋值
const myBirthday = '123456';








// 类型转换 String Number Boolean
// 类型转换 To String
let value = true;
value = String(value);
alert(typeof value);

// 类型转换 To Number
let str = '123';
num = Number(str);
alert(typeof num);

// 类型转换 To Boolean
alert(Boolean(1)) //true
alert(Boolean(0)) //false







// 交互
alert(message); //模态窗口:显示了一条消息，并暂停了脚本的执行，直到用户按下“OK”
prompt('how old are you?', 100); //显示了一个带有文本消息的模态窗口,prompt(title,100)
let isBoss = confirm("Are you the boss?"); //如果按下 OK 则结果返回 true，否则返回 false。







// if, else if, else, ?
let year = prompt('year?','');

if (year < 2015) {
    alert('小于2015');
} else if (year > 2017) {
    alert('大于2017');
} else {
    alert('大于2015,小于2017,你就是2016!');
}
// let result = condition ? value1 : value2  条件判断时，如果是真值，就返回 value1，否则返回 value2。







//  逻辑运算符
result = a || b; //逻辑或,有一个为true就为true,否则就是flase
result = a && b; //逻辑与,两个都为真时返回true,否则返回flase
result = !value; //逻辑非,不等于








//  while,for, 
// while循环
let i = 0;
while (i < 3) {
    alert(i);
    i++;    
}

// for循环
for (let a = 0; a < 3; a++) {
    alert(a);
}

// 中断循环
let sum = 0;
while(true) {
    let valueNum = +prompt('Enter a number', '');

    if (!value) break;

    sum += value;
}
alert('Sum' + sum); 

// continue 停止当前迭代,进入下一次迭代
for (let i = 0; i < 10; i++) {

    if (i % 2 == 0) continue; // 如果r取余2等于0,停止当前迭代,进入下一次迭代

    alert(i); //1,3,5,7,9
}







// switch语句
// switch ,case,break
let b = 2 + 2;
switch(b) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('exactly!');
        break;
    case 5:
    case 6:
        alert('Too large');
        break;
    default:
        alert('I don`t know');
}




let userName = 'Jonh';
// 定义函数
function showMessage() {
    userName = 'Bob'; //修改全局变量
    
    let message  = 'hello ' + userName;
    alert(message);
}
showMessage(); //未调用之前showMessage是jonh,调用后userName是Bob


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('是否得到了许可?')
    }
}

let age = prompt('多大了?',18);

if (checkAge(age)) {
    alert('可以访问');
} else {
    alert('不可以访问')
}