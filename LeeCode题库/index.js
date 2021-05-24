// 5.24
// 寻找两个正序数组的中位数
var findMedianSortedArrays = function (nums1, nums2) {
    nums1 = nums1.concat(nums2)
    nums1.sort((a, b) => a - b)
    let center = nums1.length / 2
    if (nums1.length % 2 === 0) {
        // 偶数
        return (nums1[center] + nums1[center - 1]) / 2

    } else {

        return nums1[Math.floor(center)]
    }
};
nums1 = [], nums2 = [1]
// nums1 = [1, 3], nums2 = [6,5]
// console.log(findMedianSortedArrays(nums1, nums2));


// 搜索插入位置
var searchInsert = function (nums, target) {
    let index = nums.findIndex(item => item === target)
    let tar = nums.filter((item, ind) => {
        return target>item
    })
    return index===-1?tar.length:index
    
};
// console.log(searchInsert([1, 3, 5, 6], 5.2));
