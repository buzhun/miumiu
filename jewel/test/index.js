var minPathSum = function (grid) {
  var n = grid.length - 1;
  var m = grid[0].length - 1;
  var f = [];
  for (var i = 0; i <= n; i++) {
    f[i] = [];
    for (var j = 0; j <= m; j++) {
      f[i][j] = grid[i][j];
      if (i === 0 && j === 0) continue;
      if (j === 0) {
        f[i][j] += f[i - 1][j];
      } else if (i === 0) {
        f[i][j] += f[i][j - 1];
      } else {
        f[i][j] += Math.min(f[i - 1][j], f[i][j - 1]);
      }
    }
  }

  return f[n][m];
};

var path = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log("最短路径", minPathSum(path));
