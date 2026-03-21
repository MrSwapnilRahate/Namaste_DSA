// Palindrom
// 1234321, 121, 34543

function palindrom (n) {
    if (n < 0) return false;
    let xCopy = n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    return rev === xCopy;
}
let n = 121;
console.log(palindrom(n));