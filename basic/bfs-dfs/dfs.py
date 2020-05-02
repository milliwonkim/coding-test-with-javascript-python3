class Solution:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def deepestLeavesSum(self, root):
        count = 0
        res = {}
        self.dfs(root, count, res)

        return res[max(res)]

    def dfs(self, node, count, res):
        if node:
            if node.left:
                self.dfs(node.left, count+1, res)
            if node.right:
                self.dfs(node.right, count+1, res)

        if count not in res:
            res[count] = node.val
        else:
            res[count] += node.val
solution = Solution()

print(solution.deepestLeaveSum(1))