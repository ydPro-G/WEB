// 字面量和属性
// 创建对象
let ob = {}

let user = {      //对象user
    name: 'john', //key:value,key是字符串，value可以是任意类型值
    age: 30,
    'like tools': true,  //多次属性需要用引号
};

alert(user.name); //john，访问对象属性值，对象.属性
user.isAdmin = true; //添加对象的属性值
delete user.age; // 删除对象的属性值



// 

alert(user['like tools']); //访问多词属性需要用['']

let user = {
    name:'bob',
    age: 30,
};

let key = prompt('你知道他的名字吗？','name');
// 使用变量获取属性值
alert(user[key]); // 如果输入的是‘name’,显示john

