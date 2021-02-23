// 想要继承一些属性和方法

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // rabbit 继承 animal 属性和方法

alert(rabbit.eats); // true
alert(rabbit.eats); // true
