//  动态规划，遍历前一个得到下一个
// 递归
// function getMax(list) {
//   var max = 0;
//   var lasti = -1;
//   function getSum(i) {
//     if (i === 0) {
//       lasti = -1;
//       return list[0];
//     }
//     var lastMax = getSum(i - 1);

//     var result = Math.max(lastMax + list[i], list[i]);
//     if (result > max) {
//       max = result;
//       duration = [lasti, i]; // 当前这个是右边
//     } else {
//       lasti = i + 1; // 这个不是，要从下一个开始。
//     }
//     return result;
//   }
//   getSum(list.length - 1);
//   return { max, duration };
// }

// 后面的可以根据前面的推导出来
function getMaxDurationSum(list) {
  var f = [];
  var max = 0;
  for (var i = 0; i < list.length; i++) {
    f[i] = list[0];
    if (i >= 1) {
      f[i] = Math.max(f[i - 1] + list[i], list[i]);
    }
    if (f[i] > max) {
      max = f[i];
    }
  }
  return max;
}

var list = [1, -3, 24, 3, 45, -99, 6, 3, 10];
console.log(getMaxDurationSum(list));
