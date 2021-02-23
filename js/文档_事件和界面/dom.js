// 根据DOM,每个HTML标签都是一个对象.
// 标签被称为元素,html是根元素


/* HTML/XML 文档会被浏览器解析成一个 DOM 树结构。
标签变成了元素节点。
文本变成文本节点。
任何在 HTML 文档中的内容在 DOM 中都有一个节点与之对应，甚至是注释。
*/


























//  遍历DOM
html = document.documentElement
body = document.body
// childNodes 获取的元素集合，是某元素下的所有孩子节点，包括文本节点。
document.body.childNodes();
//  firstChild ---- 某个元素第一个
document.body.firstChild();
// lastChild ---- 最后一个孩子节点
document.body.lastChild();

















// DOM集合
for (let node of document.body.childNodes) {
    alert(node); // 展示集合中的所有节点
  }