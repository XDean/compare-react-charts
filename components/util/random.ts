export function randomArray<T>(count: number, generate: (i:number) => T): T[] {
  const res: T[] = []
  for (let i = 0; i < count; i++) {
    res.push(generate(i))
  }
  return res
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}