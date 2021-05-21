- 5.18
   - [两数之和](https://leetcode-cn.com/problems/two-sum/)
  -----
- 5.19
   - [移除元素](https://leetcode-cn.com/problems/remove-element/)
   - [实现 strStr() 函数](https://leetcode-cn.com/problems/implement-strstr/)
    -----
- 5.20
   - [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
   - [回文数](https://leetcode-cn.com/problems/palindrome-number/)
       - 回文数 是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
       - let y=x.toString().splite("").reverse().join("")
       - 对比x和y 是否一致，判断是不是回文数
    -----
- 5.21
   - [ 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
       - 思路：
         - 定义一个start为0，用start累加数组的每一项，找出start和每一项之间的最大值，赋值给start
         - 拿出数组的第一项作为初始的最大值(max)，找出start和max之间的最大值，赋值给max
         - 返回max
   - [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)
       - 首先给字符串去空格（trim）
    -----
    
  








