/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable indent */

// const Operation = require('./module');

// eslint-disable-next-line import/extensions
// dziala z esm6 ale trzeba dodac w package json "type": "module",
// import { Operation } from './module.js';

// dziala z require v
const Operation = require('./module');

if (process.argv.length == 4) {
    var operation = new Operation(parseInt(process.argv[2], 10), parseInt(process.argv[3], 10));
    console.log(operation.sum());
}
