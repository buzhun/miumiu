import("core-js");

const userNum = 200;
const relationNum = 100;
let userNodes = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// 生成所有表示用户的结点
for (var i = 0; i < userNum; i++) {
  userNodes.push({
    userId: i,
    friends: [],
    degree: 0,
  });
}

// 生成所有表示好友关系的边
for (var j = 0; j < relationNum; j++) {
  const friendId_a = getRandomInt(userNum);
  const friendId_b = getRandomInt(userNum);

  if (friendId_a !== friendId_b) {
    const friend_a = userNodes.find((node) => node.userId === friendId_a);
    const friend_b = userNodes.find((node) => node.userId === friendId_b);
    if (!friend_a.friends.find((friend) => friend.userId === friendId_b)) {
      friend_a.friends.push(friend_b);
    }
    if (!friend_b.friends.find((friend) => friend.userId === friendId_a)) {
      friend_b.friends.push(friend_a);
    }
  }
}

/**
 *  @Description: 通过广度优先搜索，查找好友
 *  @param user_nodes-用户的结点；
 *  @param user_id-给定的用户ID，我们要为这个用户查找好友
 *  @return void*/
function bfs(userNodes, userId) {
  if (userId >= userNodes.length) return;

  let queue = []; // 缓存队列
  let visited = [];

  // 放入初始节点
  queue.push(userNodes[userId]);
  visited.push(userId);

  while (queue.length > 0) {
    // 取出首位
    const currentNode = queue.shift();
    for (var i = 0; i < currentNode.friends.length; i++) {
      const friend = currentNode.friends[i];
      friend.degree = currentNode.degree + 1;

      // 避免回路
      if (!visited.includes(friend.userId)) {
        // 放入朋友
        queue.push(friend);
        visited.push(friend.userId);
        // 输入度数
        console.log(`${friend.userId}: ${friend.degree}度`);
      }
    }
  }
  return;
}

bfs(userNodes, 80);
