// 生成前缀树节点
function createTreeNode(label, pre, exp){
    const treeNode ={
        label, // 节点的名称，在前缀书中是单个字母
        sons: {}, // 适用对象存放子节点，便于确认是否议案家过某个字母对应的节点
        prefix: pre, // 从树根到当前节点这条通路上，全部字符组成的前缀
        explanation:exp，// 词条的解释
    }
return treeNode
}


// 处理当前字符串的第一个字母
char c = str.toCharArray()[0];
TreeNode found = null;

// 如果字母结点已经存在于当前父结点之下，找出它。否则就新生成一个
if (parent.sons.containsKey(c)) {
  found = parent.sons.get(c);
} else {
  TreeNode son = new TreeNode(c, pre, "");
  parent.sons.put(c, son);
  found = son;
}

const str ='apple'
// 处理当前字符串的第一个字母
const c = str.charAt(0)
let found = null
// 如果字母结点已经存在于当前父结点之下，找出它。否则就新生成一个

if(parent.sons[c]){
    found = parent.sons[c]
}else{
    const son = createTreeNode(c,pre,'')
    parent.sons[c] = son
    found = son
}



