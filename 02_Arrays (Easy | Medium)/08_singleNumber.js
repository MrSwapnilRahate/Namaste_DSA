/**
 * @param {number[]} nums
 * @return {number}
 */

// =========== 1st approch ===============
// use hash map, its simple js object
// hash = {"key": "value"}

// here, key = "number" -> hash[nums[i]]
//       value = "how many times that number repeated" -> 1

// Time Complexcity - O(n) (only one loop)
// Space Complexcity - O(n) (duplicates number means in hash we will ned the n/2 spaces, n/2 -> n )
var singleNumber = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for (i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1)
        return nums[i];
    }
};

// ========= 2nd approch (Bit Manupulation) ===============
// XOR (^), a ^ a = 0 and a ^ 0 = a
//  110
//  001
//  ---
//  110

//  110
//  110
//  ---
//  000

// Time Complexcity - O(n) (only one loop)
// Space Complexcity - 0()
let add = 0;
    for (let i = 0; i < nums.length; i++) {
        add = add ^ nums[i];
    }
    return add;

