import sayHi from '../src/index.js';

test('sayHi', () => {
  expect(sayHi()).toEqual('Hello World');
  
});