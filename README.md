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

  2.border：元素的边框
    border-width,border-style,border-color,分别用来设置边框的宽度，样式（虚线，实线），颜色

  3.padding：内边距，是元素内容和边框之间的部分
    padding-top,padding-right,padding-bottom,padding-left：上内边距，右内边距，下内边距，左内边距
   
    `
    padding: 10px;    /*上、下、左、右内边距均为10px*/
    padding: 10px 20px;  /*上、下内边距为10px，左右内边距为20px*/
    padding: 10px 20px 30px;  /*上内边距为10px，左、右内边距均为20px，下内边距为30px*/
    padding: 10px 20px 30px 40px;  /*上内边距为10px，右内边距为20px，下内边距为30px，左内边距为40px*/
    `

    
