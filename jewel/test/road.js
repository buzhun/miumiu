/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// 最大网络秩
var maximalNetworkRank = function (n, roads) {
  if (!roads.length) return 0;
  var pool = new Array(n).fill(0);
  // 二维数组的创建，注意指针儿
  const connect = new Array(n);
  for (let i = 0; i < n; i++) {
    connect[i] = new Array(n).fill(false);
  }
  var max = 0;

  for (var i = 0; i < roads.length; i++) {
    var path = roads[i];
    var a = path[0];
    var b = path[1];
    pool[a]++;
    pool[b]++;
    connect[a][b] = 1;
    connect[b][a] = 1;
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i == j) continue;
      var sum = pool[i] + pool[j];
      if (connect[i][j]) {
        --sum;
      }
      max = Math.max(sum, max);
    }
  }
  return max;
};

var roads11 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [5, 6],
  [5, 7],
];
console.log(maximalNetworkRank(8, roads11));
