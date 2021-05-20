import {Layouts} from "react-grid-layout";

export function getFromLS(key: string): Layouts {
  if (global.localStorage) {
    try {
      return JSON.parse(global.localStorage.getItem(`rgl-${key}`) || '');
    } catch (e) {
    }
  }
  return {}
}

export function saveToLS(key: string, value: Layouts) {
  if (global.localStorage) {
    global.localStorage.setItem(
      `rgl-${key}`,
      JSON.stringify(value)
    );
  }
}