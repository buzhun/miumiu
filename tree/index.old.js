import("core-js");

const userNum = 100;
const relationNum = 200;
let userNodes = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// 生成所有表示用户的结点
for (var i = 0; i < userNum; i++) {
  userNodes.push({ userId: i, friends: [], degree: 0 });
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

// 广度遍历
let tempList = [userNodes[0]];
let result = [];
let visited = [];

function bianli() {
  if (!tempList.length) {
    return;
  }
  const topNode = tempList.shift();
  if (!visited.includes(topNode.userId)) {
    // 取出头部的入队列
    result.push(topNode);
    visited.push(topNode.userId);
    console.log("放入", topNode.userId);
    // 把它的孩子放到队列中
    if (topNode.friends.length) {
      tempList = [
        ...tempList,
        ...topNode.friends.map((item) => ({
          ...item,
          degree: topNode.degree + 1,
        })),
      ];
    }
  }

  bianli();
}

bianli();
console.log(
  1,
  result.filter((item) => item.degree === 2)
);
