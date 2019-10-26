export const isEven = (n) => {
    return n%2 === 0;
}

export const isPrime = (n) => {
    if (n < 2)
        return false;

    for (let d = 2; d <= Math.sqrt(n); d++) {
        if (n%d === 0)
            return false;
    }
    return true;
}

export const isPerfectSquare = (n) => {
    return Math.sqrt(n)%1 === 0;
}

const sumOfDivisors = (n) => {
    let s = 1;

    for (let d = 2; d <= n; d++) {
        if (n%d === 0)
            s += d;
    }

    return s;
}

const aliquotSum = (n) => {
    let s = 1;

    for (let d = 2; d < n; d++) {
        if (n%d === 0)
            s += d;
    }

    return s;
}

export const computeAbundance = (n) => {
    return aliquotSum(n) - n;
}

const computeDeficiency = (n) => {
    return n - aliquotSum(n);
}

export const isNaricissitic = (n) => {
    let p = Math.floor(Math.log10(n)) + 1;
    let s = 0;

    for (let i = 0; i < p; i++) {
        s += Math.pow(Math.floor(n / Math.pow(10, i)) % 10, p);
    }

    return s === n;
}

/*
factorial
composite (not prime)

triangular
pentagonal
hexagonal

narcissistic
evil
emirp
niven
odious
ordinal
pernicious
quine
*/