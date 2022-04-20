/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/* eslint-disable no-var */
var assert = require('assert');
var foo = require('../ex2function');

describe('Function test', function () {
  it('Function detects directory', function () {
    assert.strictEqual(foo('directory'), 1);
    // expect(op.sum()).to.equal(4);
  });
  it('Detects and reads file', function () {
    assert.strictEqual(foo('file.txt'), 'something');
    // expect(op.sum()).to.equal(0);
  });
});
