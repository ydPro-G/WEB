// 浏览器环境和规范

// 根对象--window
//  作为全局对象存在，代表浏览器窗口，提供了操作窗口的相关方法














// DOM ---- 文档对象模型 ---- 提供了访问页面内容的方法,可以更改和创建页面上的任何内容
document.body.style.background = 'red'; //body 背景色red
// 1秒后,取消<body>的背景色
setTimeout(() => document.body.style.background = '', 1000);














// BOM ---- 浏览器对象模型 ---- 浏览器（主机环境）提供的一个附加对象，用于操作文档以外的内容。
alert(location.href); // 展示当前 URL
if (confirm('去维基百科？')) {
  location.href = 'https://wikipedia.org'; // 重定向浏览器到另一个 URL
}