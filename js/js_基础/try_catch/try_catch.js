//  错误处理
try {
    alert('start of try tuns'); // 1 
    // 没有错误
    lalla  // 未定义的变量
    alert('start of try tuns'); // 2
} catch(err) {
    alert('有错误输出这个'); // 3
};



















// 我们可以继承 Error 和其他内置错误类型，只需要注意 name 属性，也不要忘记调用 super。