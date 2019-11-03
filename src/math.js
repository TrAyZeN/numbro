const isEven = (n) => {
    return n%2 === 0;
}

const isPrime = (n) => {
    if (n < 2)
        return false;

    for (let d = 2; d <= Math.sqrt(n); d++) {
        if (n%d === 0)
            return false;
    }
    return true;
}

const isPerfectSquare = (n) => {
    return Math.sqrt(n)%1 === 0;
}

const aliquotSum = (n) => {
    let s = 1;

    for (let d = 2; d < n; d++) {
        if (n%d === 0)
            s += d;
    }

    return s;
}

const computeAbundance = (n) => {
    return aliquotSum(n) - n;
}

const isNarcissistic = (n) => {
    let p = Math.floor(Math.log10(n)) + 1;
    let s = 0;

    for (let i = 0; i < p; i++) {
        s += Math.pow(Math.floor(n / Math.pow(10, i)) % 10, p);
    }

    return s === n;
}

const formatYesNo = (p) => {
    return p ? "Yes" : "No";
}

export const formatIsEven = (n) => {
    return formatYesNo(isEven(n));
}

export const formatIsPrime = (n) => {
    return formatYesNo(isPrime(n));
}

export const formatIsPerfectSquare = (n) => {
    return formatYesNo(isPerfectSquare(n));
}

export const formatAbundance = (n) => {
    let a = computeAbundance(n);

    if (a === 0)
        return `${a} (perfect)`;
    else if (a === 1)
        return `${a} (quasiperfect)`;
    else if (a === -1)
        return `${a} (almost perfect)`;
    else if (a > 0)
        return `${a} (abundant)`;
    else if (a < 0)
        return `${a} (deficient)`;
}

export const formatIsNarcissistic = (n) => {
    return formatYesNo(isNarcissistic(n));
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