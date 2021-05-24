import {randomArray, randomInt} from "../../util/random";

export type ScatterDemoProps = {
  data: Data[]
}

export type Data = {
  type: string
  x: number
  y: number
}

export function generateData(dataset: number, points: number): Data[] {
  return randomArray(points, i => ({
    type: `type ${i % dataset}`,
    x: randomInt(500, 1000),
    y: randomInt(100, 500),
  }))
}