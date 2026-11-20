/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let temp = s.trim().split(" ")
    console.log(temp)
    let lastWord = temp[temp.length - 1]
    return lastWord.length
};