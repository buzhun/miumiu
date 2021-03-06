// 暴力，复杂度 O(n^3) 时间
function calSum(start, end, list) {
  return list.slice(start, end + 1).reduce((sum, item) => sum + item);
}

function findMaxDuration(list) {
  var length = list.length;
  var max = length - 1;
  var maxValue = 0; // 如果是0，就不拿
  var maxDuration = [-1, -1];
  for (var start = 0; start <= max; start++) {
    for (var end = start + 1; end <= max; end++) {
      var newSum = calSum(start, end, list);
      if (newSum > maxValue) {
        maxValue = newSum;
        maxDuration = [start, end];
        console.log(newSum, maxValue);
      }
    }
  }
  console.log("找到", maxDuration, maxValue);
}

var list = [1, -3, 24, 3, 45, -99, 6, 3, 10];

findMaxDuration(list);
