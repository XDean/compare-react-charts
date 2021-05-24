import {randomArray, randomInt} from "../../util/random";

export type BarProps = {
  data: Data[]
}

export type Data = {
  name: string
  uv: number,
  pv: number,
}

export function generateData(): Data[] {
  return randomArray(randomInt(5, 10), i => ({
    name: `Page ${i}`,
    uv: randomInt(500, 1000),
    pv: randomInt(100, 500),
  }))
}