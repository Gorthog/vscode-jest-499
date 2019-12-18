import { evaporator } from '../src/evaporator';

describe('Fixed Tests evaporator', () => {
  it('Basic tests', () => {
    expect(evaporator(10, 10, 10)).toBe(22);
    expect(evaporator(10, 10, 5)).toBe(29);
  });
});
