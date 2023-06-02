/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    let exponent = getBaseLog(2, n)
    if (parseFloat(exponent.toFixed(10))%1 === 0)
        return true
    else
        return false
};
