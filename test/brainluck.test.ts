import { brainLuck } from '../src/brainluck';

describe('brainLuck', () => {
  it('Echo until byte(255) encountred', () => {
    expect(brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255))).toBe(
      'Codewars'
    );
  });

  it('Echo until byte(0) encountred', () => {
    expect(brainLuck(',[.[-],]', 'Codewars' + String.fromCharCode(0))).toBe(
      'Codewars'
    );
  });

  it('Two numbers multiplier', () => {
    expect(
      brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8, 9))
    ).toBe(String.fromCharCode(72));
  });

  it('decrease 0 to 255', () => {
    expect(brainLuck('-.', '')).toBe(String.fromCharCode(255));
  });

  it('jumps forward', () => {
    expect(brainLuck('[+]-.', '')).toBe(String.fromCharCode(255));
  });

  it('throws invalid instructions when missing bracket', () => {
    expect(() => brainLuck('[', '')).toThrowError('invalid instructions');
  });

  it('throws invalid instructions when using unrecognized instruction', () => {
    expect(() => brainLuck('*', '')).toThrowError('invalid instructions');
  });

  it('fib??', () => {
    expect(brainLuck(',.>,.>,.>', '123')).toBe('123');
  });
});
