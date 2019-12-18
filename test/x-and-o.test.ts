import { xo } from '../src/x-and-o';

describe('xo', () => {
  it('Basic Tests', () => {
    expect(xo('xo')).toBe(true);
    expect(xo('xxOo')).toBe(true);
    expect(xo('xxxm')).toBe(false);
    expect(xo('Oo')).toBe(false);
    expect(xo('ooom')).toBe(false);
  });
});
