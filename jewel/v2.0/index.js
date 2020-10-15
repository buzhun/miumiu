// 动态规划，遍历前一个得到下一个
function getMax(list) {
  var max = 0;
  var lasti = -1;
  function getSum(i) {
    if (i === 0) {
      lasti = -1;
      return list[0];
    }
    var lastMax = getSum(i - 1);

    var result = Math.max(lastMax + list[i], list[i]);
    if (result > max) {
      max = result;
      duration = [lasti, i]; // 当前这个是右边
    } else {
      lasti = i + 1; // 这个不是，要从下一个开始。
    }
    return result;
  }
  getSum(list.length - 1);
  return { max, duration };
}

var list = [1, -3, 24, 3, 45, -99, 6, 3, 10];
console.log(getMax(list));
