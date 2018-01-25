test('VAR', () => {
  var x = 5;
  expect(x).toBe(5);
});

test('LET and VAR', () => {
  let x = 5;
  expect(x).toBe(5);
});

test('LET', () => {
  let x = 6;
  expect(x).toBe(6);
});

test('LET', () => {
  let x = foo();

  function foo() {
    let x = 20;

    return x;
  }

  expect(x).toBe(20);
});

test('CONST - scalar values', () => {
  const x = 5;
  expect(x).toBe(5);
});

test('CONST - assignment', () => {
  const x = 5;
  expect(x).toBe(5);
});

test('CONST - objects', () => {
  const person = {
    "name": "Linus",
    "age": 42,
    'lastname': 'torvalds'
  };

  expect(person.lastname).toBe('torvalds');
});
