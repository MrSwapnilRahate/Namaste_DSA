// count the total number of digits
// n = 12334

function countDigit (n) {
    if (n === 0) return; // zero haii to count nhi hoga
    n = Math.abs(n);    // abs convert +ve number to -ve
    let count = 0;
    while ( n > 0) {
        n =  Math.floor(n / 10);
        count = count + 1;
    }
    return count;
}
let n = 1234;
console.log("total number of digit", countDigit(n));
