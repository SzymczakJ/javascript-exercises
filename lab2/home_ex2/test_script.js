"use strict";

var global_number_count = 0
function sum(string) {
  if (!isNaN(parseInt(string))) {
    global_number_count += parseInt(string);
  }
  return global_number_count;
}

function digits(string) {
  var digit_sum = 0;
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      digit_sum += parseInt(string[i]);
    }
  }
  return digit_sum
}

function letters(string) {
  var letter_sum = 0;
  for (var i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      letter_sum += 1;
    }
  }
  return letter_sum;
}

var expect = chai.expect;

describe('The sum function', function() {
  it('Returns 111 for 111', function() {
    expect(sum("111")).to.equal(111);
  });
  it('Returns 122 for 11aa', function() {
    expect(sum("11aa")).to.equal(122);
  });
  it('Returns 122 for b3345a', function() {
    expect(sum("b3345a")).to.equal(122);
  });
  it('Returns 122 for aaaaa', function() {
    expect(sum("aaaaa")).to.equal(122);
  });
  it('Returns 122 for empty string', function() {
    expect(sum("")).to.equal(122);
  });
 });

describe('The letters function', function() {
  it('Returns 0 for 111', function() {
    expect(letters("111")).to.equal(0);
  });
  it('Returns 2 for 11aa', function() {
    expect(letters("11aa")).to.equal(2);
  });
  it('Returns 2 for b3345a', function() {
    expect(letters("b3345a")).to.equal(2);
  });
  it('Returns 0 for aaaaa', function() {
    expect(letters("aaaaa")).to.equal(5);
  });
  it('Returns 0 for empty string', function() {
    expect(letters("")).to.equal(0);
  });
 });

describe('The digits function', function() {
  it('Returns 3 for 111', function() {
    expect(digits("111")).to.equal(3);
  });
  it('Returns 2 for 11aa', function() {
    expect(digits("11aa")).to.equal(2);
  });
  it('Returns 15 for ab3345a', function() {
    expect(digits("ab3345a")).to.equal(15);
  });
  it('Returns 0 for aaaaa', function() {
    expect(digits("aaaaa")).to.equal(0);
  });
  it('Returns 0 for empty string', function() {
    expect(digits("")).to.equal(0);
  });
 });
// var expect = chai.expect;

// function sum(x,y) {
// 	return x+y;
// }

// describe('The sum() function', function() {
//  it('Returns 4 for 2+2', function() {
//    expect(sum(2,2)).to.equal(4);
//  });
//  it('Returns 0 for -2+2', function() {
//    expect(sum(-2,2)).to.equal(0);
//  });
// });