// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

export class Challenge {
  static solution(num: number) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (!(i % 3) || !(i % 5)) {
        sum += i;
      }
    }

    return sum;
  }
}
