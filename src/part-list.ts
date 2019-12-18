// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/typescript

export function partlist(arr: string[]): string[][] {
  const lists = [];
  for (let i = 1; i < arr.length; i++) {
    lists.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  }

  return lists;
}
