/**
 * @param {number[]} nums
 * @return {number}
 */

// V V IMP -> Before starting any problem just see if there is any math formula in that
//            bcoz solving que by any formula will be the best soluction coz it will land 
//            u to minimun time complexcity.

// Time Complexicuty -> O(n) 
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let partialSum = 0;

    for (let i = 0; i < nums.length; i++) {
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
};