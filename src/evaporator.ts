// www.codewars.com/kata/5506b230a11c0aeab3000c1fhttps:

export function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number
): number {
  let remains = 100;
  let days = 0;
  while (remains > threshold) {
    remains -= (remains * evapPerDay) / 100;
    days++;
  }

  return days;
}
