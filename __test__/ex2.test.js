const {sum, sub} = require('../ex2.js');

describe('exercise 2', ()=>{
  test('what happens when it fails', () => {
    expect(sub(4, 2)).toBe(2);
  });
})