export function getRandomIntInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomizer(currentInnerIteratrion: number): boolean {
  const randomNumber = getRandomIntInRange(1, 8);
  return randomNumber - 2 == currentInnerIteratrion - 1 ? true : false;
}
