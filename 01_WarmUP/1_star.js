/*
Q.1
****
****
****
****
*/
// let n = 4;
// for(let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++) {
//        row = row + "*";
//     }
//     console.log(row);    
// }
// ------------------------------------------

/*
Q.2
*
**
***
****
*/
// let n = 4;
// for(let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }
// -------------------------------------------

/*
Q.3
1
22
333
444
*/
// let n = 4;
// for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + i;
//     }
//     console.log(row);
// }
// -------------------------------------------

/* 
Q.4
1234
123
12
1
*/
// let n = 4;
// for (let i = 4; i > 0; i--) { 
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row = row + j
//     }
//     console.log(row);
// }
// -----------------------------------------------

/*
Q.5
   *
  **
 ***
****
*/
// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for(let j = 0; j < (n - i) - 1; j++) {
//         row = row + " "
//     }
//     for(let k = 0; k <= i; k++ ) {
//         row = row + "*";
//     }
//     console.log(row);
// }
// ------------------------------------------------

/*
Q.6
1234
123
12
1
*/
// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i + 1; j++) {
//         row = row + j
//     }
//     console.log(row);
// }

/*
Q.7
1
10
101
1010
*/

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j <= i; j++) {
//         row = row + toggle;
//         toggle = toggle === 1 ? 0 : 1;
//     }
//     console.log(row);
// }

/*
Q.8
1
01
010
1010
*/

let n = 4;
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        toggle = toggle === 1 ? 0 :1;
    }
    console.log(row);
}