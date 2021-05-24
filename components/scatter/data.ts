import {randomArray, randomInt} from "../util/random";

export type ScatterDemoProps = {
  data: Data[]
}

export type Data = {
  type: string
  x: number
  y: number
}

export function generateData(): Data[] {
  const types = randomInt(1, 5)
  return randomArray(randomInt(50, 100), i => ({
    type: `type ${i % types}`,
    x: randomInt(500, 1000),
    y: randomInt(100, 500),
  }))
}