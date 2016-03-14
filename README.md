# JavaScript OOP Practice

## Purpose

This practice *touches* the following:

1. Basics of *prototype inheritance*.
2. *ES6* features.
3. *BDD* with *Mocha* and *Chai*.
4. *NPM* infrastructure.

## Spacify

### Overview

Please implement *spacify* function extending prototype of native *String* class.
This function should compute string with space injected between chars of the original string.
As follows:

* "ABC".spacify() // "A B C"
* "A".spacify() // "A"
* "".spacify() // ""

Do **not** do such **dirty** things in production.
This task is just for understanding of *prototype inheritance*.

Please take a look at [bind operator](https://github.com/tc39/proposal-bind-operator) for inspiration.

### Steps

1. Fork this repository.
2. Checkout forked repository.
1. Install [Node.js](http://nodejs.org/).
2. Install project dependencies by `npm install`.
3. Run tests by `npm run test` (tests should fail).
4. Go to the *src* folder and implement *spacify* module.
5. Tune [ESLint](https://eslint.org/docs/rules/no-extend-native) to complete this task without static analysis errors.
6. Check your progress against specification (tests).
