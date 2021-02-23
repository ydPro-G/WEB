

// 递归和栈
// 递归是一个编程术语，意思是“自调用”函数。这样的功能可以用优雅的方式来解决某些任务。
// 当一个函数调用自己时，它被称为递归步骤。递归的基础是函数参数，使任务变得简单，以至于函数不会进行进一步调用。















// 剩余参数 和 扩展运算符

// 当我们在代码中看到 ... 时，它要么是剩余参数，要么是扩展运算符。

// ... 在定义参数时表示剩余参数，以数组模式存储  ---- 将一个参数列表以数组模式存储
function sumAll(...args) { //剩余参数用...表示 -- args是数组的名称
    let sum = 0;
    for (let arg of args) sum += arg;

    return sum;
}
alert(sumAll(1)); //1
alert(sumAll(1,2)); // 3
alert(sumAll(1,2,3)); // 6

// 扩展运算符 --- 将一个可迭代对象arr，分解成一个参数列表
let arr = [1,2,3];
alert(Math.max(...arr)); // 3 （把数组展开成一个参数列表）
// 扩展操作符可以用来合并数组
let arr = [3,5,1];
let arr2 = [8,9,15];

let merged = [0, ...arr, 2, ...arr2]; // 合并数组
alert(merged); //0,3,5,1,2,8,9,15














// 闭包
// 一个函数获得外部变量，拿的总是最新的值。
let one = "John";

function sayHi() {
  alert("Hi, " + one); // one = john
}

one = "Pete"; //  one = pete

sayHi(); // 当 sayHi 函数执行时，会从外部拿 one。这时全局环境变量的值已经是 Pete 了。










// var
// 1. 变量没有块作用域，它们最小的可见层是函数级别上。
// 2. 变量声明是在函数开始时处理的。

















// setTimeout ---- 允许在指定的时间间隔之后触发一次函数。
function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, 'hello', 'john'); // 在1秒后调用sayHi, output hello, john

// setInterval ---- 在指定间隔去定时触发的
let timerId = setInterval(() => alert('tick'), 2000); //每 2 秒重复一次



















//  函数绑定
let user = {
    firstName: 'john'
};
function func(phrase) {
    alert(phrase + ',' + this.firstName);
}

let funcUser = func.bind(user); // this绑定











// 箭头函数
/*
1.没有this
2. 没有arguments
3. 不能用new调用
*/










