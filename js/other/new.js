var check = document.getElementById('checklist');

let items = check.querySelectorAll('li');
// id = checklist元素里的所有input
let inputs = check.querySelectorAll('input');

for (var i = 0; i < items.length; i++) {
    // 点击事件
    items[i].addEventListener("click", editItem);
    // 失去焦点事件
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}
function editItem() {
    this.className = "edit";
    // 赋值点击元素的input
    var input = this.querySelector("input");
    // 聚焦
    input.focus();
    // 自动选中
    input.setSelectionRange(0, input.value.length);
}

function undateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeypress(event) {
    if (event.which === 13) {
        updateItem.call(this);
    }
}