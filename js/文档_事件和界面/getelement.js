// document.getElementById()  ---- 获取id
<div id="elem">
  <div id="elem-content">Element</div>
</div>
let elem = document.getElementById('elem');
elem.style.background = 'red';



















// document.querySelectorAll() ---- 返回 elem 中匹配指定 CSS 选择器的所有元素组成的集合。
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
//  获取ul最后一个li的子元素组成的集合
let elements = document.querySelectorAll('ul li:last-child');


for (let elem of elements) {
    alert(elem.innerHTML); // "test" "passed"
  }
















//   querySelector ---- elem.querySelector(css) 返回匹配给定 CSS 选择器的第一个元素





















// 内容:innerHTML  ---- 将元素内的 HTML 作为字符串获取。
document.body.innerHTML // 获取body元素的html










// textContent ---- 获取元素的文本内容
<div id="news">
  <h1>头条！</h1>
  <p>火星人攻击人类！</p>
</div>
 alert(news.textContent);
 // 打印内容如下：
 //
 //  头条！
 //  火星人攻击人类！
















 // hidden ---- 指定 DOM 元素是否可见
 <div>下面两个 div 都隐藏了</div>

<div hidden>携带特性“hidden”</div>

<div id="elem">使用 JavaScript 向“hidden”特性赋值</div>

<script>
  elem.hidden = true;
</script>