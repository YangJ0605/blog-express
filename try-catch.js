//能捕捉到的异常，必须是线程执行已经进入 try catch 但 try catch 未执行完的时候抛出来的。
// 代码报错的时候，线程执行未进入 try catch，那么无法捕捉异常

try {
  // a. // 这种属于语法错误。语法错误在语法检查阶段就报错了，程执行尚未进入 try catch 代码块，自然就无法捕获到异常。
  // throw '3' // 代码报错的时候，线程执行处于 try catch 之中，则能捕捉到异常。
  // function x() {a.b}
  // x() //error ReferenceError: a is not defined
  setTimeout(() => {
    console.log(a.b)
  }, 1000);

} catch (e) {
  console.log('error', e);
}
