// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/typescript

export function foldArray(array: number[], runs: number): number[] {
  let result = Array.from(array);
  for (let i = 0; i < runs; i++) {
    for (let j = 0; j < Math.floor(result.length / 2); j++) {
      result[j] += result[result.length - j - 1];
    }

    result = result.slice(0, Math.round(result.length / 2));
  }
  return result;
}
