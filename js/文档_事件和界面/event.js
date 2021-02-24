// 浏览器事件


// 1.鼠标事件
click  -- 鼠标左击
contextmenu -- 鼠标右击
mouseover/mouseout -- 鼠标进入/离开元素
mousedown/mouseup -- 在元素上按下/释放鼠标按键
mousemove -- 鼠标移动
// 2. 表单元素事件
submit -- 用户提交表单form时
focus -- 用户focus元素时 在input上
// 3. 键盘事件
keydown/ keyup -- 用户按下/释放键盘按键时
// 4. 文档事件
DOMContentloaded -- 当HTML的DOM树构建完毕后
// 5. CSS事件
transitionend -- 当CSS过度动画结束时















// HTML特性
特性以on(事件名)形式命名
// 举例：为input绑定一个click事件处理器
<input value='click me' onclick="alert('点击！')" type = "button"/>
// 创建一个函数调用它
<input value='click me' onmouseover="func" type = "button"/>
function func() {
    let tags = document.getElementById('id');
    tags.click();
};














// DOM属性 ---- 事件处理器总是绑定在 DOM 属性上
使用elem.on<事件名>的形式为元素绑定事件处理器
<input id='elem' type='button' value='点击我'></input>
Element.onclick = function() {
    alert('谢谢');
};














// DOM绑定事件 ---- 将现有函数作为事件处理程序使用
<input id='elem' type='button' value='点击我'/>

function sayThanks() {
    alert('thinks');
};
elem.onclick = sayThanks;










// 使用this访问元素 ---- this 指代绑定事件的元素
点击button后弹出按钮内容(this.innerHTML)
<button onclick="alert(this.innerHTML)"> click me </button>













// 需要注意
// 1. 以DOM属性方式绑定事件的处理器不带() ---- 在函数名后加(),绑定的是函数执行结果
button.click = sayThanks;
// 2. 在HTML特性里绑定事件处理器需要加圆括号
<input id='elem' type='button' value='点击我' onclick = "sayThanks()"/>









// addEventListener ---- 处理同一个事件类型同时绑定多个事件处理程序




