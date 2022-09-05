const {sum, sub} = require('../ex1.js');

describe('exercise 1', ()=>{
  test('does the sum function work?', () => {
    expect(sum(1, 2)).toBe(3);
  });
})