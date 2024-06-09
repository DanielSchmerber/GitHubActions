
const complexFunction = require('../index.js');

test('Test Complex Function', () => {
    expect(complexFunction("Hello ","World")).toBe("Hello World");
});