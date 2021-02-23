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










// 函数
let userName = 'Jonh';
// 定义函数
function showMessage() {
    userName = 'Bob'; //修改全局变量
    
    let message  = 'hello ' + userName;
    alert(message);
}
showMessage(); //未调用之前showMessage是jonh,调用后userName是Bob


//  function return
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
    alert('不可以访问');
}

// 命名函数：用一种语言前缀来开始一个函数，它模糊地描述了动作。
show... 显示什么
get...  返回什么
calc... 计算什么
create... 创建什么
check... 检查什么














// 函数表达式
// 在js中函数只是一个值，它可以赋值给变量
let sayHi = function() {
    alert('hello');
};
alert(sayHi); //显式函数代码

function sayBey() {
    alert('hello');
};
// 函数可以复制。不带括号复制时复制的是函数本身，带括号复制时复制的是函数的调用结果。
let func = sayBey;

// 函数声明作为代码块，最后的}不带分号，函数表达式作为值使用，所以最后的}带；号

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    alert('同意');
}

function showNO() {
    alert('拒绝');
}
// 函数被调用，js中称为回调函数
ask('Dou you agree?',showOk,showNO);

/* 
函数表达式和函数声明的区别：
函数表达式是在执行流到达它的时候才创建，并且从那时才是可用的。
函数声明在整个脚本/代码块都是可用的。
*/

/* 
函数表达式产生的原因：
解决当一个函数声明在一个代码块中进行时，它在代码块中可见，在代码块外不可见的问题。
使用函数表达式，将函数赋值给在 if 语句之外声明的变量，这样就可以在代码块外使用。
 */
let age = prompt('age?',18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert('hello');
    };
} else {
    welcome = function() {
        alert('no');
    };
}
welcome(); //可以调用

// 箭头函数,约等于return的意思
let num = (a, b) => c
let num = function(a, b) {
    return c;
}