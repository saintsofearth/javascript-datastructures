console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

function fib(num) {
    if (num === 1 || num === 2) return 1;
    return fib(num - 2) + fib(num - 1);
}