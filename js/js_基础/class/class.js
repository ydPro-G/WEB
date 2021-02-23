//  类
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

new User('any'); //创建一个新对象 ---- constructor携带参数sny执行，并赋值this.name

























// 类的继承
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert($(this.name) + 'runs with speed' + this.speed);
    }
    stop() {
        this.speed = 0;
        alert(this.name + 'stands still');
    }
}

class Rabbit extends Animal {   //类的继承语法  class class_2 extends class_1
    hide() {
        alert(this.name + 'hides');
    }
}


















// 静态属性和方法  ---- 静态方法是绑定于某个特定类上的函数，不是特定于某个实例对象上的函数。
class User {
    static staticMethod() {  // 使用static前缀声明静态方法
        alert(this === User);
    }
}

User.staticMethod(); // true

