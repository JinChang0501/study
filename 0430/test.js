//作用域只限函式
var msg = "我是誰";

function message() {
  var msg = "我在哪裡";
  console.log(msg); //我在哪裡
}
message();
console.log(msg); //我是誰