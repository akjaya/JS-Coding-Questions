function factorial(number) {
    if (number === 1) {
        console.log(number)
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial = factorial * i
        }
        return factorial
    }
}
console.log("The factorial is " + factorial(6));