# WEB
 
## HTML
HTML是什么？
超文本标记语言，不是编程语言而是标记语言。

HTML通过标签来描述网页。

## HTML元素的组成
HTML是由标签嵌套内容组成，HTML元素可以嵌套。

标签由<>和关键字组成，通常有开始标签和结束标签。

有一些HTML元素不需要包含内容，它们被称为空元素，空元素只有开始标签没有结束标签。

HTML标签可以用有属性，属性放在开始标签中，属性与关键词之间，属性与属性之前有空格隔开。属性=后便是属性值，属性值用“”引起来.

## 块级元素和行内元素
HTML自带的特性让它们在浏览器中表现有差异，我们将HTML元素分为块级元素和行内元素
块级元素：以块的形式展示，总是独占一行，将后面元素挤到新的一行;
行内元素：紧挨着显示，不会自动换行，行内元素通常被块级元素包含着嵌套显示。

## HTML语义化
语义化：指从HTML元素上就能看出页面的大致结构

<header>:顶部，页眉
<nav>:定义导航栏链接的集合
<article>:独立内容
<section>:对页面进行分块，可以和<article>互相嵌套
<aside>:表示除页面主要内容之外的内容，比如侧边栏
<footer>:底部，页脚


## HTML5的几种类型：将 HTML5 中常用 api 作个简单分类
 ### HTML5 DOM
 1.getElementByClassName
 2.遍历相关属性
 3.ele.scrolllntoView()
 ### HTML5 事件
 1.contextmenu
 2.DOMContentLoaded:优于window.load执行
 3.readystatechange:判断动态载入的script,link标签是否加载完成
 4.hashchange
 ### HTML5表单
 1.input/textarea里新增autoFocus字段
 2.表单验证api
 使用checkValidate()校验required,pattern="\d+"属性

 ### HTML5脚本
 1.跨文档消息串数，核心是postMessage
 2.拖放api
 3.媒体元素<video>,<audio>
 4.浏览器状态管理(history)

 ### HTML5 存储
 1.sessionStorage:大小上线为2.5Mb，页面关闭时清空
 2.localStorage：大小上限为2.5Mb，页面关闭时不会清空

 ### HTML5 JavaScript Api
 1.requestAnimationFrame(callback):在重绘前执行指定的回调函数
 2.Web Worker






---


## CSS
 ### CSS盒模型
 在网页布局中，可以将HTML标签堪称一个个矩形盒子，盒模型就是用来描述这些矩形盒子所占空间大小。
  **相关属性**
  1.width：宽
    height：高

  2.**border**：元素的边框,边框只有一个宽度的概念
    border-width,border-style,border-color,分别用来设置边框的宽度，样式（虚线，实线），颜色

  3.**padding**：内边距，是元素内容和边框之间的部分
    padding-top,padding-right,padding-bottom,padding-left：上内边距，右内边距，下内边距，左内边距
   
    `
    padding: 10px;    /*上、下、左、右内边距均为10px*/
    padding: 10px 20px;  /*上、下内边距为10px，左右内边距为20px*/
    padding: 10px 20px 30px;  /*上内边距为10px，左、右内边距均为20px，下内边距为30px*/
    padding: 10px 20px 30px 40px;  /*上内边距为10px，右内边距为20px，下内边距为30px，左内边距为40px*/
    `
  4.**margin**：指外边距，用来定义元素周围的空间
    margin-top.margin-right,margin-bottom,margin-left:上，右，下，左
    不同写法对应的值参照padding

 ### 盒模型分类：标准盒模型和IE盒模型
  标准盒模型：标准盒模型用的是W3C规范
  IE盒模型：IE盒模型用的怪异盒模型

  **标准盒模型**：
    1.元素的width，height值包含内容（content），不包含`border`和`padding`的值。
    2.盒子的大小由元素的宽高，边框和内边距决定
    `盒子的宽 = width + broder-width * 2 + padding-left + padding-right`
    `盒子的高 = height + broder-width * 2 + padding-top + padding-nottom`
  
  **IE盒模型**
    1.元素的width，height不仅包括content，还包括border和padding
    2.盒子的大小取决与width，height，修改border和padding值并不能改变盒子的大小
    3.盒子的大小等于元素的width，height值，在IE盒模型中，border盒padding的空间会挤压content的空间，使得元素的内容宽高小于width，height设置的值。


### 浏览器兼容性与其他
只要设置合适的DTD，大多数浏览器按照标准盒模型来修改，但IE5.X,IE6在怪异模式下根据ie盒子显示

标准盒模型下元素的 box-sizing 属性（IE8+）默认值为 content-box，将它设置成 border-box 可转换为 IE 盒模型。在实际应用场景中，若想控制元素总宽高保持固定，这个设置很有用

元素的宽（width）、高（height）、边框（border）、内边距（padding）、外边距（margin）都是盒子模型的重要组成部分，但盒子模型的大小只与元素的宽高，边距，内间距有关，外边距只影响盒子所占外围空间的大小



---
## CSS 布局实践
> 前端开发就像是搭房子，HTML是构成房子的砖瓦，css则是决定这些砖瓦的位置和对它们进行装饰，大多数网站有着相似的布局，掌握这些套路便可快速高效的开发工作。
 ### 相关属性
  **1.display**：定义了元素生成的显示框类型
                 常见的属性值：`block`,`inline`,`inline-block`,`inherit`,`none`,`flex`(`inherit`表示这个元素从父元素继承display属性值；none表示这个元素不显示；flex是flex布局重要的属性设置)
  
  **元素默认display值**：每个元素都有默认的display属性，div标签的默认display属性是block（块），span标签的display属性是inline（行内），相关显示代码( web\css\display.html)<br />
  1. block:
  + 块级元素，总是独占一行，从上到下显示，前后有换行符；
  + 没有设置宽度时，它的宽度是其容器的100%；
  + **可以给块级元素设置宽高，内边距，外边距等盒模型属性；**
  + 块级元素可以包含块级元素和行内元素
  + 常见的块级元素有`div,h1~h6,p,ul,ol,dl,table,address,form`等

        
  2. inline：
  + 行内元素，从左到右显示，前后没有换行符
  + 不会独占一行，只会占领自身宽高空间
  + **给行内元素设置宽高不会其作用，margin只对左右起作用，padding也只对左右起作用**
  + 行内元素一般不可以包含块级元素，只能包含行内元素和文本
  + 创建的行内元素：`a,b,label,img,em,strong,i,input`
  + `img`是行内元素，为什么能给它设置宽高呢？这是因为`img`是可替代元素，可替代元素有内在的尺寸，所以宽高可以设置
  + 可替代元素有：`input,button,textarea,select`,这些元素即使是空的，浏览器也会根据其标签与属性决定显示的内容

  3. inline-block:
  + **既具有块级元素可以设置宽高的特性，又具有行内元素不换行的特性**
  + 详细代码在（\css\inline-block.html），在代码中没有设置margin的值，但是div会有间隙，这是因为浏览器会将HTML中的换行符，制表符，空白符合并成空白符，如何消除掉这个间隙请看[这个链接](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

**2. position**
布局中很重要的因素就是定位，position属性就是来定义元素的定位机制
  1. 常用属性：
  + `relative`:相对定位，相对于元素的正常位置进行定位,遵循文档流来进行定位
  + `absolute`:绝对定位，相对于出static定位以外的元素进行定位，为什么叫绝对定位？因为它脱离了文档流，只遵循父元素的位置定位，不再从上到下从左到右了
  + `fixed`：固定定位，相对于浏览器窗口进行定位，网站中固定的header和footer就是用固定定位实现的
  + `static`：默认值，没有定位属性，元素正常出现在文档流中
  + `inherit`：继承父元素的position属性值
  **文档流**：指的是从上到下，从左到右的文档布局，当给元素的position属性设置`absolute`,`fixed`时便会**脱离文档流，不再遵守从上到下，从左到右的规律。**
  + `float`:设置`float`属性的元素会脱离文档流，然后向左或向右移动，直到**碰到父容器边界或碰到另一个浮动元素，块级元素会忽略float元素，文本和行内元素却会环绕它**，所以float最开始用来实现文字环绕效果。
  
  #### 当不给父元素这是宽高时，父元素宽高会被子元素宽高撑开，但是当子元素设置了float属性后，子元素会一出道父元素外，父元素的宽高不会被撑开,怎么解决这个问题？
    1. `clear`：clear 属性用来定义哪一侧不允许其他元素浮动，常见的值有 left 、right、both， 分别表示左侧不允许浮动元素、右侧不允许浮动元素、左右两侧均不允许浮动元素。
    2. `br`:br 自带 clear 属性，clear 属性有 left、right 和 all 三个属性值可选。
    该方法同上一个方法添加空标签一样，也达到了清除浮动的目的，同上一个方法相比，语义化明显些了，但是也存在结构样式行为分离的问题，不推荐使用
    3. `overflow`:添加 overflow 不仅减少了代码量，还不存在语义化的问题，但是也可能因为内容增加导致超出尺寸的内容被隐藏。BFC 的一个特性便是可以包含浮动元素，设置 overflow 为 hidden 满足了创建一个 BFC 的条件，其实就是创建 BFC，利用 BFC 固有特性清除浮动
    4. `主流方法after`:伪元素，该方法本质也是在末尾添加一个看不见的块元素来清除浮动。这个方法也不存在语义化的问题，是目前的主流清除浮动的方法。
---
## 经典布局示例
 1. 两栏布局
 2. 三栏布局
 ### 两栏布局
  1. 基础两栏布局示例代码：\css\lianglan.html
  2. 使用float两栏布局的三种方法
    + 第一种：只有一个元素是浮动的，另一个不浮动只留外边缘，所以不需要设置宽度，主元素设置为overflow：hidden
    代码地址\css\LiangLan\float\float1\lianglan_float1.html

    + 第二种：两种元素都浮动，要设置宽度，主元素为overflow：hidden，包含浮动元素
    代码地址：css\LiangLan\float\float2\lianglan_float2.html
    
    + 第三种：一个设置浮动，另一个不浮动但也不留外边缘，将这个设置为overflow，让它识别到浮动元素
    代码地址：\css\LiangLan\float\float3\lianglan_float3.html
  3. 使用absolute
 ### 三栏布局
    圣杯布局来源于2006年的一篇文章：In Search of the Holy   Grail。双飞翼布局始于淘宝 UED。两者都是在解决两边固定宽度，中间自适应的三栏布局，并且主要内容要优先渲染，按照 DOM 从上至下的加载原则，中间的自适应部分要放在前面。
    <br / >
   1. 圣杯布局:
     + **核心思想是使用浮动布局，用padding为左右元素留空间，灵活使用margin的负值和相对定位让元素移动到相应位置**
     + 代码地址\css\three\SB\grail.html




   2. 双飞翼布局：
     + 同样的问题，双飞翼布局通过多加一个 div 并使用了 margin 来实现，圣杯布局则是使用 padding、相对定位（relative）、设置偏移量（left、right）来实现，相对来说，双飞翼布局更容易理解。在圣杯布局中，无限缩小屏幕（假设没有设置 body 的最小宽度），当 .main 的宽度小于 .left 时，会出现布局错乱。
     + 代码地址：\css\three\SFY\sfy.html
 ### Flex布局
 1. 概念：
 + Flex 布局是一整个模块，其中父元素称为 flex container，意为容器；子元素称为 flex item，意为项目；
 + Flex 布局中有两条看不见的轴线：主轴（main axis）和交叉轴（cross axis）。默认的主轴是平行的，交叉轴是垂直于主轴的；
 + 主轴的开始位置叫 main start，结束位置叫 main end；交叉轴的开始位置叫 cross start，结束位置叫 cross end；
 + 子元素在主轴方向上的大小称为 main size，在交叉轴方向上的大小称为 cross size。
 + 主轴、交叉轴，和它们的开始位置、结束位置。子元素在父元素中会沿着主轴从 main start 到 main end 排列，沿着交叉轴从 cross start 到 cross end 排列。在常规的布局中，浏览器是从左到右排列，挤不下了就换行，在这种情况下，主轴是水平方向，交叉轴是垂直方向，主轴是从左到右，交叉轴是从上到下。
在 Flex 布局中，默认的主轴方向也是水平的，交叉轴是垂直的，通过改变  flex-direction 和 flex-wrap 的属性值可以分别改变两个轴的方向和它们的开始位置、起始位置，这就让布局更加灵活多变了。
 2. 布局属性
  + 容器属性
  + 项目属性
  具体内容查看[链接](https://www.yuque.com/fe9/basic/tlk8ck#f090bfc6)

### 常见CSS示例
 1. 居中：`text-align:center`:该方法可以让子元素水平居中，但只对图片、按钮、文字等行内元素起作用.

 2. 子元素水平居中：`margin`设置为auto：把要居中的子元素的 margin-left、margin-right 都设置为 auto，该方法能让子元素水平居中，但是对**浮动元素和绝对定位的元素无效**。(使用这个方法子元素的宽度需要确定，如果不设置子元素的宽度，默认是父元素的 100%，将不会起作用了。)

 3. 设置 line-height 的值为父容器的高度,适用于只有一行文字的情况。

 4. 绝对定位的居中:子元素的宽高确定的时候，可以先设置 top、left 来使元素偏移至父容器的中间位置附近，再通过 margin 负值将元素“拉”至居中，此时 margin 值刚好是子元素本身宽高的一半。

 5. 使用Flex布局

6. 制作圆形：`border-radius: 50%;`

7. 阴影：`box-shadow: h-shadow v-shadow blur spread color inset;`
• h-shadow：必需设置，表示水平阴影的位置，正值阴影向右，负值向左；
• v-shadow：必需设置，表示垂直阴影的位置，正值阴影向下，负值向上；
• blur：可选，代表模糊半径；
• spread：可选，阴影的尺寸；
• color：可选，阴影的颜色；
• inset：可选，使用该值可以将外部阴影（outset）转换成内部阴影


### css响应式布局


---


## JavaScript

  ### 认识JavaScript
   介绍：`JavaScript`是一种具有**函数优先**的**轻量级**，解释型的编程语言，
   JavaScript基于原型变成，多范式的动态脚本语言，并支持**面向对象**，命令式和声明式风格。

   1. JS语言特性
    + 解释性语言（不需要编译成文件）跨平台
    + 单线程
    + ECMA标准
    + 解释性语言与编译性语言的区别：
      1. 编译性语言在执行前需要一个专门的编译过程，把程序语言编译成为机器语言的文件，直接运行，程序执行效率高，跨平台性能差。
      2. 解释性语言:解释性语言不需要在运行前编译，运行时编译，每执行一次就要编译一次效率较低。
  2. JavaScript运行机制
    + js的执行队列是从上到下执行。线程里面有任务之分：宏任务和微任务。执行完主线程的代码后，会执行宏任务，再执行当前宏任务下的微任务，在引用对象之前必须确保该对象已经存在。
    + 同步任务与异步任务
     1. 同步任务：单线程，按照主程序执行
     2. 异步任务：按照任务队列，遇到类似输入输出的任务时将其挂起，等待通知主线程，任务才会继续执行下去

  ### JS引入，变量，值类型，运算符
  1. 引入JS
      + 页面内嵌入标签:
            <script>
            //相关代码
            </script>
      + 外部引用：<script src="引用的代码路径"></script>

  2. 基本结构
      + 结构：HTML
      + 行为：JS
      + 样式：css
    
  3.JS基本语法
    + 变量(variable)
      + 声明，赋值分解
      + 单一var
      
    + 命名规则
      + 变量名必须以英文字母，_,$开头
      + 不可用系统的关键字，保留字作为变量名

    1. 声明变量：`var a;`/`let a;` var和let区别：https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Variables
      + 声明多个变量： var a=100,
                          b=200;
      
    2. 基本语法
       + 原始值(栈数据)：Number,String,undefined,null,Boolean,直接按值存放，可以直接访问
       + 引用值(堆数据);存放在堆内存中的对象，变量实际保存的是一个指针，这个指针指向另一个位置，每个空间大小不一样，要根据情况进行特定分配。当我们需要访问引用类型（如对象，数组，函数等）的值时，首先从栈中获得该对象的地址指针，然后再从堆内存中取得所需的数据。(JS栈和堆的区别)[https://www.cnblogs.com/chengguanhui/p/4737413.html]
    


    






