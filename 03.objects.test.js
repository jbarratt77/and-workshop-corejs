test('property access', () => {
  //RULE: USE key access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: '35'
  };

  expect(obj.name).toBe('Julian');
  expect(obj.lastname).toBe('Brown');
  expect(parseInt(obj.age)).toBe(35);
});

test('key access', () => {
  //RULE: USE property access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: '35'
  };

  expect(obj['name']).toBe('Julian');
  expect(obj['lastname']).toBe('Brown');
  expect(parseInt(obj['age'])).toBe(35);
});

test('computed property names', () => {
  //RULE: USE computed property names
  const real = 'real_';
  const fake = 'fake_';

  const vip = {
    real_name: 'Kelly',
    real_lastname: 'White',
    fake_name: 'Pink',
    fake_lastname: 'Venn',
    age: '35'
  };

  expect(vip.real_name).toBe('Kelly');
  expect(vip.real_lastname).toBe('White');
  expect(vip.fake_name).toBe('Pink');
  expect(vip.fake_lastname).toBe('Venn');
  expect(parseInt(vip.age)).toBe(35);
});

test('define object properties', () => {
  //RULE: USE Object.defineProperty
  const vip = {
    name: 'Kelly',
    lastname: 'White',
  };

  Object.defineProperty(vip, 'age', {
    value: 35,
    writable: false
  });

  expect(vip.name).toBe('Kelly');
  expect(vip.lastname).toBe('White');
  expect(vip.age).toBe(35);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

it('should return an array of keys from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(Object.keys(vip)).toEqual(['name', 'lastname', 'age']);
});

it('should return an array of values from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(Object.values(vip)).toEqual(['Kelly', 'White', 35]);
});
