/* The definition of the number properties comes from Wikipedia
 */

/* An even number is a number that is divisble by two
 */
// A number that is not even is odd
const isEven = (n) => {
    return n%2 === 0;
}

/* A prime number is a natural number greater than 1 that cannot be
 * formed by multiplying two smaller natural numbers.
 */
// A number that is not prime is composite
const isPrime = (n) => {
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    for (let d = 3; d <= Math.sqrt(n); d+=2) {
        if (n%d === 0)
            return false;
    }
    return true;
}

const isPerfectSquare = (n) => {
    return Math.sqrt(n)%1 === 0;    // square root of this number is an int
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

/* In number theory, an evil number is a non-negative integer
 * that has an even number of 1s in its binary expansion.
 */
// a number that is not evil is odious
const isEvil = (n) => {
    return n.toString(2).split("").reduce((a, c) => parseInt(a) + (c === "1" ? 1 : 0))%2 === 0;
}

// TODO
const isEmirp = (n) => {
    let p = Math.floor(Math.log10(n));
    let s = 0;  // reversed of n

    return isPrime(n) && isPrime(s);
}

/* A harshad number (or Niven number) in a given number base,
 * is an integer that is divisible by the sum of its digits
 */
const isNiven = (n) => {
    return n%digitSum(n) === 0;
}

const digitSum = (n) => {
    if (n < 1)
        return 0;
    else
        return digitSum(Math.floor(n/10)) + n%10;
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

export const formatIsEvil = (n) => {
    return formatYesNo(isEvil(n));
}

export const formatIsEmirp = (n) => {
    return formatYesNo(isEmirp(n));
}

export const formatIsNiven = (n) => {
    return formatYesNo(isNiven(n));
}

/*
factorial
composite (not prime)

triangular
pentagonal
hexagonal

emirp
niven
ordinal
pernicious
quine
*/