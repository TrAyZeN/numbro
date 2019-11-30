import React from 'react';
import { setGlobal, addReducer } from 'reactn';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {
    formatIsEven, formatIsPrime, formatIsPerfectSquare,
    formatAbundance, formatIsNarcissistic, formatIsEvil,
    formatIsEmirp, formatIsNiven, formatIsFactorial } from './math.js';

setGlobal({
    number: null,
    even: "",
    prime: "",
    perfectSquare: "",
    abundance: "",
    narcissistic: "",
    evil: "",
    emirp: "",
    niven: "",
    factorial: ""
});

addReducer('updateNumber', (global, dispatch, n=0) => ({
    number: n,
    even: formatIsEven(n),
    prime: formatIsPrime(n),
    perfectSquare: formatIsPerfectSquare(n),
    abundance: formatAbundance(n),
    narcissistic: formatIsNarcissistic(n),
    evil: formatIsEvil(n),
    emirp: formatIsEmirp(n),
    niven: formatIsNiven(n),
    factorial: formatIsFactorial(n)
}));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
