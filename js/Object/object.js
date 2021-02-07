// 字面量和属性
// 创建对象
let ob = {}

let user = {      //对象user
    name: 'john', //key:value,key是字符串，value可以是任意类型值
    age: 30,
    'like tools': true,  //多词属性需要用引号
};

alert(user.name); //访问，对象.属性
user.isAdmin = true; //添加属性值
delete user.age; // 删除属性值























// 方括号
alert(user['like tools']); //访问多词属性需要用['']

let user = {
    name:'bob',
    age: 30,
};

let key = prompt('你知道他的名字吗？','name');
// 使用变量获取属性值
alert(user[key]); // 如果输入的是‘name’,显示john

// 计算属性
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]:5, //属性名使用的是变量的值。即prompt返回的值，默认apple
};
alert(bag.apple ); //如果fruit的值是apple，弹5
















// 属性简写，不推荐
function makeUser(name, age) {
    return {
        name, //等同于name: name
        age   //等同于age:age
    };
}









// 存在性检查
let user();

alert(user.nofind === undefined); //true ===检测这个对象的属性是否存在

let user = {
    name:'bab',
    age:30
};
alert('age' in user); //true  in 检测存在
alert('blabla' in user); //false










// for in 循环：遍历对象属性名
let user = {
    name: 'john',
    age: 30,
    isAdmin: true,
};

for(let key in user) {
    alert(key); //name,age,isAdmin  输出属性名
    alert(user[key]); //john 30 true  输出属性名对应的属性值
}

// 对象属性输出顺序
// 整数属性按照排序后的顺序输出的，其他属性则是按照声明先后输出的。
// 通过+号让区号按照声明先后输出
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }














// 对象的引用
对象与原始值有一个最基本的不同在于，对象是“以引用的形式”存储和复制的
变量是每次都创建一个独立变量，对象则是对内存地址的引用

let user = {name: 'john'};

let admin = user;// 对象赋值引用的是同一个内存地址

admin.name = 'pate'; //修改内存地址中的数据时，其他对象引用的是修改后的内存地址
alert(user.name);


// 常量对象
// 用const声明的对象可以修改，声明的变量不可以修改，因为变量是重新赋值，而对象是对内存内部进行修改
const user = {
    name: 'bab',
};

user.age = 25; //(*)

alert(user.age); //25





















// 对象的复制与合并：Object.assign
复制一个对象变量，得到的是对同一个对象的引用。如果真的需要当前对象的一个克隆怎么办？
let user = {name:'john'};

let one = {one:1};
let two = {two:2};

// 使用Object.assign复制 one two里的属性到user
Object.assign(user, one, two);


