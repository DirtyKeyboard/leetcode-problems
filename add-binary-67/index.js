/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //given a and b in binary, convert to decimal, add the values, then convert the sum back to binary
    //0 0 0 0 0 0 0 0
    //128 64 32 16 8 4 2 1
    //2^PLACE
    let num1 = BigInt(0)
    let num2 = BigInt(0)
    for (let i = 0; i < a.split('').length; i++)
    {
        if (a.split('')[i] === '1')
            num1 += BigInt(2n**BigInt(a.split('').length-1-i))
    }
    for (let i = 0; i < b.split('').length; i++)
    {
        if (b.split('')[i] === '1')
            num2 += BigInt(2n**BigInt(b.split('').length-1-i))
    }
    let sum = BigInt(num1+num2)
    const binarySum = []
    let binaryLength = BigInt(0)
    while (sum >= BigInt(2n**binaryLength))
        binaryLength++
    for (let i = 0; i < binaryLength; i++)
        binarySum.push(0)
    //if sum >= 2^1 then check 2^2 keep going until sum <= 2^x, then x will be the length of binarySum
    //Convert sum to binary
    for (let i = 0; i < binarySum.length; i++)
    {
        //Loop goes from 0-7, at index 0 check for 2^7, which is 2^length-1-i
        if (sum - BigInt(2n**BigInt(binarySum.length-1-i)) >= 0)
        {
            binarySum[i] = 1
            sum -= BigInt(2n**BigInt(binarySum.length-1-i))
        }
    }
    let returnString = ""
    let haveWeHitAOneYet = false
    binarySum.forEach(el => {
        if (el === 1)
            haveWeHitAOneYet = true
        if (haveWeHitAOneYet)
            returnString = returnString.concat(el)
        })
    return returnString || "0"
};
