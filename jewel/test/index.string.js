// 括号嵌套深度
var maxDepth = function (s) {
  var deep = 0;
  var max = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      deep++;
    } else if (s[i] === ")") {
      deep--;
    }
    // 记录之前最大的
    max = Math.max(deep, max);
  }
  return max;
};
var s = "1";
var result = maxDepth(s);
console.log(result);
