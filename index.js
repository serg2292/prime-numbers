function getPrimeNumbers(min, max) {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    }

    return Array.from({ length: max - min + 1 }, (_, index) => min + index).filter((elem) => isPrime(elem))
}

const x = getPrimeNumbers(11, 20)

console.log(x)