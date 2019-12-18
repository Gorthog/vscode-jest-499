import { partlist } from '../src/part-list';

describe('Fixed Tests partlist', () => {
  it('Basic tests', () => {
    expect(partlist(['I', 'wish', 'I', "hadn't", 'come'])).toStrictEqual([
      ['I', "wish I hadn't come"],
      ['I wish', "I hadn't come"],
      ['I wish I', "hadn't come"],
      ["I wish I hadn't", 'come'],
    ]);
    expect(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])).toStrictEqual([
      ['cdIw', 'tzIy xDu rThG'],
      ['cdIw tzIy', 'xDu rThG'],
      ['cdIw tzIy xDu', 'rThG'],
    ]);
    expect(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])).toStrictEqual([
      ['vJQ', 'anj mQDq sOZ'],
      ['vJQ anj', 'mQDq sOZ'],
      ['vJQ anj mQDq', 'sOZ'],
    ]);
  });
});
