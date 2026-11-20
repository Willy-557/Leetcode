/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let temp = nums
    for(let i = 0; i < temp.length; i++) {
      for(let j = i+1; j < temp.length; j++) {
        if (temp[j] < temp[i]) {
          let tempNum = temp[i]
          temp[i] = temp[j]
          temp[j] = tempNum
        }
      }
    } 
    return temp
};