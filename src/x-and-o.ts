// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript

export const xo = (str: string) =>
  (str.match(/x/gi)?.length ?? 0) === (str.match(/o/gi)?.length ?? 0);
