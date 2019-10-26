import React from 'react';
import { setGlobal, addReducer } from 'reactn';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { isEven, isPrime, isPerfectSquare, computeAbundance } from './math.js';

setGlobal({
    number: null,
    even: false,
    prime: false,
    perfectSquare: false,
    abundance: null
});

addReducer('updateNumber', (global, dispatch, n=0) => ({
    number: n,
    even: isEven(n),
    prime: isPrime(n),
    perfectSquare: isPerfectSquare(n),
    abundance: computeAbundance(n)
}));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
