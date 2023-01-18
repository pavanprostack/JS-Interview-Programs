
// Fibonacci series(cumulation)

// let num = parseInt(prompt("Enter Limit for Fionacci series"));

function fibonacciSeries(num) {
    var n1 = 0, n2 = 1, total;
    for (let i = 1; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
    }
    return total
}
let result = fibonacciSeries(10)
console.log(result)



