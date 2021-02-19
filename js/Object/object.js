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



















// 垃圾收集器，内存管理在 JavaScript 中是自动执行的，当一个内存不可访问时，那么就会删除掉

// user是指向对象的引用
let user = { name:"bab",};
// user被重写，引用丢失，垃圾收集器会丢弃数据并释放内存
user = null;

let user = { name:"bab",};
let admin = user;
// 虽然user被重写了 ，但是仍然可以通过admin访问到对象，所以不会被垃圾收集
user = null;


// 相互关联的对象
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother:woman
    }
}

let family = marry({
    name: 'bab'
}, {
    name:'ann'
});

// 删除了这两个引用，已经没有引用指向bab，现在bab是不可访问的，就会从内存中连带它的数据删除掉。
delete family.father;
delete family.mother.husband;

// 如果一个在内部相互关联的大对象，是不可访问的，也会直接从内存中删除掉






















// 在对象里，我们只能使用字符串或者 Symbol 值作为键名。其他类型的键名会自动转换为字符串。

// Symbol
//  对象的属性仅支持string和Symbol值

// id是一个symbol的值
let id = Symbol(); 

// id是一个带有描述内容“id”的symbol值
let id = Symbol("id");

//false----symbol是唯一的
let id1 = Symbol("id");
alert(id === id1); 

symbol值不会自动转换成字符串，如果需要使用需要手动转换
alert(id.toString());

// 字面量中的symbol，需要用到[]
let id = Symbol("id");
let user = {
    name: 'bob',
    [id]:123 //not just "id:123"----因为使用的是变量id作为键名，而不是字符串id
};

// symbol 类型会被for...in 循环忽略
let id = Symbol('id');
let user = {
    name: 'bobo',
    age: 13,
    [id]: 123
};
for (let key in user) alert(key); //print name,age,but no symbol type--id
// 通过symbol值可以直接访问
alert(user[id]);


// 全局symbol值:symbol.for(key)
let id = Symbol.for("id"); // 如果symbol不存在就创建
// 如果有就读取
let idAdmin = Symbol.for("id"); 


// 通过Symbol得到名称---Symbol.keyFor()
let sym = Symbol.for("name");
alert( Symbol.keyFor(sym)); // name


// 系统Symbol值
























对象方法---this
声明一个函数后，就可以使用this，但 this 是直到函数调用时才有的

// 方法
let user = { //  this is object
    name: 'john',
    age: 30
};

// 作为对象属性的函数称为方法。
user.sayHi = function() { //this is object methods 
    alert('hi!');
};
user.sayHi();
// 使用预定义函数作为方法使用
function sayHello() {
    alert('hello');
};
user.sayHi = sayHello;
user.sayHi()

// object methods shorthand--方法简写:省略function
let object_one = {
    sayHi() {   //sayHi:function() {}
        alert('hi');
    }
};

// 方法中的this---在方法里访问对象，可以使用this关键字,this 指向对象自身
let user = {
    name:'bob',
    age:16,

    sayHi() {
        alert(this.name);  //this.name == user.name
    }
};
user.sayHi(); //bob

//this 值是在代码执行时确认的，可以在函数里定义，要用的时候再调用
let user = { name:'bob'};
let admin = { name: 'admin'};

function sayHello() {
    alert( this.name );
}

user.f = sayHello;
admin.f = sayHello;

user.f(); // bob
user.f(); //admin












