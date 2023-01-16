
function fact(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result
}
console.log(fact(5))


// function factorial(num){
//     let result = 1;
//     for(let i = 1; i<=num; i++){
//         result=result*i;
//     }
//     return result
// }
// console.log(factorial(9))