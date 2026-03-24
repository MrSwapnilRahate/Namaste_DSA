// Two Pointers
// 1st pointer => iterate through array to find out all unique elements
// 2n pointer =>  to maintain position where we have to place the unique elemnte

// leetcode Q.26
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 0; // 1st pointer
    for (let i = 0; i < nums.length; i++){ // 2nd pointer(i)
        if(nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
};