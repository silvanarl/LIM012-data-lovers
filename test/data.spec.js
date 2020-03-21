import { coincidencias, anotherExample } from '../src/data.js';


describe('coincidencias', () => {
  it('is a function', () => {
    expect(typeof coincidencias).toBe('function');
  });

  it('returns `coincidencias`', () => {
    expect(coincidencias()).toBe('coincidencias');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
