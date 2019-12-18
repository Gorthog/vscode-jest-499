import { foldArray } from '../src/fold-array';

describe('solution', () => {
  it('basic tests', () => {
    let input = [1, 2, 3, 4, 5];
    let expected = [6, 6, 3];
    expect(foldArray(input, 1)).toStrictEqual(expected);

    expected = [9, 6];
    expect(foldArray(input, 2)).toStrictEqual(expected);

    expected = [15];
    expect(foldArray(input, 3)).toStrictEqual(expected);

    input = [-9, 9, -8, 8, 66, 23];
    expected = [14, 75, 0];
    expect(foldArray(input, 1)).toStrictEqual(expected);
  });
});
