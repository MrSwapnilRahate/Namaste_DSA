// 1234 => 4321

function reverse_Integer (n) {
    let xCopy = n;
    let rev = 0;
    n = Math.abs(n);   // convert -ve -> +ve
    while (n > 0) {
        let rem = Math.floor(n % 10);
        rev = rev * 10 + rem;
        n = Math.floor(n/10);
    }
    if (rev > 2 **31-1) return 0;   // to handle que limit
    return xCopy < 0 ? -rev : rev;  // if number is negative

}
console.log(reverse_Integer(359));