// 浏览器事件


// 1.鼠标事件
click-- 鼠标左击
contextmenu-- 鼠标右击
mouseover / mouseout-- 鼠标进入 / 离开元素
mousedown / mouseup-- 在元素上按下 / 释放鼠标按键
mousemove-- 鼠标移动
// 2. 表单元素事件
submit-- 用户提交表单form时
focus-- 用户focus元素时 在input上
// 3. 键盘事件
keydown / keyup-- 用户按下 / 释放键盘按键时
// 4. 文档事件
DOMContentloaded-- 当HTML的DOM树构建完毕后
// 5. CSS事件
transitionend-- 当CSS过度动画结束时















// HTML特性
特性以on(事件名)形式命名
    // 举例：为input绑定一个click事件处理器
    < input value = 'click me' onclick = "alert('点击！')" type = "button" />
        // 创建一个函数调用它
        <input value='click me' onmouseover="func" type="button" />
function func() {
    let tags = document.getElementById('id');
    tags.click();
};














// DOM属性 ---- 为DOM元素绑定事件处理器
使用elem.on < 事件名 > 的形式为元素绑定事件处理器
    < input id = 'elem' type = 'button' value = '点击我' ></input >
        elem.onclick = function() {
            alert('谢谢');
        };














// DOM绑定事件 ---- 将现有函数作为事件处理程序使用
<input id='elem' type='button' value='点击我' />

function sayThanks() {
    alert('thinks');
};
elem.onclick = sayThanks;










// 使用this访问元素 ---- this 指代绑定事件的元素
点击元素弹出内容(this.innerHTML)
    < button onclick = "alert(this.innerHTML)" > click me </button >  //弹出 click me













        // 需要注意
        // 1. 以DOM属性方式绑定事件的处理器不带() ---- 在函数名后加(),绑定的是函数执行结果
        button.click = sayThanks;
// 2. 在HTML特性里绑定事件处理器需要加圆括号
<input id='elem' type='button' value='点击我' onclick="sayThanks()" />









// addEventListener ---- 同一个事件类型同时绑定多个事件处理程序
elements.addEventListener(event, handler[, phase]); // event : 事件名，比如click；   handler： 事件处理程序； phase：可选参数，指定事件处理函数在哪个阶段触发
<input id='elem' type='button' value='click me'></input>
function handler1() {
    alert('谢谢1');
};
function handler2() {
    alert('再次感谢');
};
elem.onclick = () => alert('你好');
elem.addEventListener(click, handler1);
elem.addEventListener(click, handler2);

// removeEventListener ---- 移除事件处理程序 ---- 移除时保证是同一个处理器，同一个函数
element.removeEventListener(event, handler[, phase]); // 与 addEventListener 接收的参数一致
function handler() {
    alert(1);
  }
  
  button.addEventListener('click', handler);
  button.removeEventListener('click', handler);

// 某些事件不能用DOM属性方式绑定，只能用addEventListener,例如transitionend(动画事件)
<html>
<style>
  input {
    transition: width 1s;
    width: 100px;
  }

  .wide {
    width: 300px;
  }
</style>

<input type="button" id="elem" onclick="this.classList.toggle('wide')" value="Click me">

<script>
  elem.ontransitionend = function() {
    alert("DOM property"); // 不行
  };

  elem.addEventListener("transitionend", function() {
    alert("addEventListener"); // 这个会生效
  });
</script>

</html>














// 事件对象
// 事件发生时，浏览器会创建一个事件对象，事件对象本身会作为参数传递给事件处理器
举例：
<input type="button" value="click me" id="elem"></input>
elem.onclick = function(event) {
    // 显示事件类型， 绑定事件的元素, x坐标， y坐标
    alert('事件类型是：' + event.type + ' 元素是： ' + event.currentTarget); // type:类型  ----currentTarget：表示绑定事件的元素，即 this（排序手动指定事件上下文环境的情况）
    alert('x坐标是： ' + event.clientX + ' y坐标是 ' + event.clientY);  //  clientX/clientY:发生鼠标事件时，光标处的窗口坐标
};



















// 对象处理器：handleEvent
// 当 addEventListener 接受对象作为处理器的时候，事件发生后，会调用对象上的 handleEvent() 方法属性。
elem.addEventListener('click', {
    handleEvent(event){
        alert(event.type + event.currentTarget);
    },
});









/* 总结：三种绑定事件处理器的方式：
1.HTML属性 onclick = "..." ---- 可以创建函数调用onclick里面的函数
2.DOM属性：elem.onclick=function
3.addEventListener(enevt,handler),移除事件用removeEventListener(enevt, handler)
第三种方法用的多
*/















问题1：
为 button 添加一个点击事件，点击时，隐藏之后的 <div id="text"> 元素。
<input type="button" id="hider" value="点击隐藏文本" />
<div id="text">文本</div>

document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}



问题2：
点击一个元素隐藏自己
1.<input type="button" id="hider" value="点击隐藏文本"  onclick = "this.hidden = true"/>
2.document.getElementById('hider').onclick = function () {
    document.getElementById('hider').hidden = true;
};



问题3：





