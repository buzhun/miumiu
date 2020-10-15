// 移动同时累加, 复杂度 O(n^2) 时间
function findMaxDuration(list) {
  var length = list.length;
  var max = length - 1;
  var maxValue = 0; // 如果是0，就不拿
  var maxDuration = [-1, -1];
  for (var start = 0; start <= max; start++) {
    var curSum = list[start]; // 固定左节点
    for (var end = start + 1; end <= max; end++) {
      curSum += list[end];
      if (curSum > maxValue) {
        maxValue = curSum;
        maxDuration = [start, end];
      }
    }
  }
  console.log("找到", maxDuration, maxValue);
}

var list = [1, -3, 24, 3, 45, -99, 6, 3, 10];

findMaxDuration(list);
