import { isSquare } from '../src/is-square';
// import the type of assertion library you wish to use (Chai recommended)

// TODO: Replace examples and use TDD development by writing your own tests

describe('solution', () => {
  it('should work for some examples', () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare(0)).toBe(true);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(4)).toBe(true);
    expect(isSquare(25)).toBe(true);
    expect(isSquare(26)).toBe(false);
  });
});
