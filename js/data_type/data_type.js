// 对象----存储多个值作为属性的容器。可以用 {} 创建
// 对象示例👇：
let obj = {
    key: value,
    fun = function(name) {
        alert(this.name);
    }
};
obj.fun('name');














// 数值
// 大数👇
let billion = 1e9; // 1和9个0----1000000000
// 小数👇
let us = 1e-6; // 0.000001  1左边有6个0

// 十六进制
alert(0xff); //255

// toString(base)
let num = 255;
alert(num.toString(16)); //ff----16进制
alert(num.toString(2)); //11111111----2进制
alert(123456..toString(16));

// 取余，舍入--我们有 1.2345，想把它四舍五入到 2 位数，得到 1.23。取余时会有
let num = 1.23456;
alert(Math.floor(num * 100) / 100); //1.23456 -> 123.456 -> 123 ->1.23
let num_1 = 12.36;
alert(num.toFixed(1)); //"12.4" ---- toFixed：在点之后将数字发送到 n 个数字，并返回结果的字符串表示。

// parseInt and parseFloat --转化为数字
alert(parseInt('100')); //100----返回整数
alert(parseFloat('12.5')); //12.5----返回浮点数
















// 字符串
let str = 'that is string';

// 特殊符号，\ == 转义字符
alert("hello\nworld!"); // \n换行

// 字符串长度
alert('my'.length); //2 

// 访问字符----[]
let str = 'hello';
alert(str[0]); // h

// str.indexOf---- in str find substr ,存在返0，不存在返1
let str = 'Widget with id';
alert(str.indexOf('Widget')); // 0 ---- 存在返0
alert(str.indexOf('widget')); // 1 ---- 不存在返1

// includes == indexOf，需要知道是否存在不需要知道其位置时用includes
let str = 'Widget with id';
alert(str.includes('Widget')); //true
alert(str.includes('dget')); //false

// str.startsWith 和str.endsWith
alert("Widget".startsWith('Wid')); //true 字符串开始判断
alert("Widget".endsWith('get')); //true 字符串结束判断

// str.slice ---- 返回从 start 到 end（不包含）处的字符串，允许负值
let str = 'stringify';
alert(str.slice(0, 5));  // strin  不包含5，返回0，1，2，3，4

// toLowerCase/toUpperCase -- 字符串大小写方法


















// 数组 ---- Array ---- 存储有序集合的特殊结构
// 数组可以存储任何类型

// 1.声明
let arr = [];
let fruits = ['apple', 'orange', 'plum'];
alert(fruits[0]); // apple ---- output
fruits[2] = 'pear'; // now['apple', 'orange','pear']   ---- 添加
alert(fruits.length); //3 ---- length获取数组元素数量


// 2.pop/push , shift/unshift方法
// pop
let fruits = fruits;
alert(fruits.pop()); // remove 'pear', and alert it --提取数组的最后一个元素并返回它
alert(fruits); // apple ,orange
// push
let fruits = fruits;
fruits.push('pear'); // 把元素附加到数组的末尾
alert(fruits); // apple, orange, pear
// shift
let fruits = fruits;
alert(fruits.shift()); //remove apple and alert it --提取数组的第一个元素并返回它
alert(fruits); // orange, pear
// unshift
let fruits = ["Orange", "Pear"];
fruits.unshift('apple'); //将元素添加到数组的开头
alert(fruits);// Apple, Orange, Pear


// 3. 内部构件
let fruits = ['banana'];
let arr = fruits; // 数组是通过引用传递的
arr.push('apple');
alert(fruits); //banana, apple


// 4. 性能push/pop 方法很快，shift/unshift 方法很慢。插入到开始要重新排序


// 5.循环
let arrs = ['apple', 'orange', 'pear'];
for (let i = 0; i < arrs.length-1; i++) {
    alert(arr[i]);  //循环遍历输出
}
// for of 迭代数组对象
for(let arr of arrs) {
    alert(arr);
}

// 6. lenth -- 属性值表示的是数组长度,最大的索引值加 1。它是由数组方法自动调整的
//  元素是0开始 ，长度是1开始
let arr = [1, 2, 3, 4, 5];
alert(arr.length); //4
arr.length = 0; // 清除数组

// 7. 多维数组
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
alert(matrix[1][1]);// 存储矩阵

// 8. toString
let arr = [1,2,3];
alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); //true












// 数组方法
// 1.splice
let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0,3); // 从索引0开始删除3个元素
arr.splice(0,3, 'let is '); // 从索引0开始删除3个元素,并添加一个元素 ‘let is ’

// 2.concat
let arr = [1, 2];
alert(arr.concat([3,4])); // 1,2,3,4

// 3.查找数组
//indexOf/lastIndexOf 和 includes
//  arr.indexOf(item, from) 从 from 索引处开始查找元素，返回查找元素所在的索引值，没有的话返回 -1。
//  arr.lastIndexOf(item, from) 与 indexOf 相似，不过是从末尾开始查找匹配的。
//  arr.includes(item, from) 从 from 索引处开始查找元素，找到的话返回 true，否则返回 false。
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true
// find和findindex
// find ---- 有一个对象数组，我们怎么依据特定的判断条件来查找元素
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
let user = users.find(item => item.id == 1);
alert(user.name); // john


// 数组方法一览表：
// 添加/删除元素:
// • push(...items)：向数组末尾添加元素。
// • pop()：删除数组的末尾元素。
// • shift()：删除数组的开头元素。
// • unshift(...items)：在数组开头添加元素。
// • splice(pos, deleteCount, ...items)：在索引 pos 处删除 deleteCount 个元素，然后插入元素 items。
// • slice(start, end)：创建一个新数组，数组成员是位置 start 到 end（不包括）组成的元素集合。
// • concat(...items)：返回一个新的数组：复制当前的所有成员并向它添加元素。如果任何项目都是一个数组，那么它的元素就会被取出。
// 查找元素：
// • indexOf/lastIndexOf(item, pos)：从索引位置 pos 处开始查找元素，如果没有找到的话，返回 -1。
// • includes(value)：如果数组包含 value 则返回 true，否则返回 false。
// • find/filter(func)：通过函数 func 来过滤元素，返回第一个/全部函数里返回 true 的值。
// • findIndex 类似 find 方法，不过返回的是索引而不是元素值。
// 转换数组：
// • map(func)：从为每个元素调用 func 的结果创建一个新的数组。
// • sort(func)：排序数组元素，然后返回它。
// • reverse()：将数组原地反转，然后返回它。
// • split/join：将字符出转成数组/数组转换为字符串。
// • reduce(func, initial)：通过调用每个元素的  func并在调用之间传递一个中间结果来计算数组的单个值。
// 遍历数组：
// • forEach(func)：对数组中每个元素调用函数 func，不返回任何值。
// 额外：
// • Array.isArray(arr)：检查 arr 是不是数组































