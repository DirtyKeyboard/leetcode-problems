/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const clippedString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverseString = ""
    for (let i = clippedString.length-1; i >= 0; i--)
    {
        reverseString = reverseString.concat(clippedString.charAt(i))
    }
    if (reverseString === clippedString)
        return true
    else
        return false
};
