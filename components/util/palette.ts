const Palette = [
  ['#FFD700', '#A9A9A9', '#4a4e4d', '#0e9aa7', '#3df4ab', '#f6cd61', '#fe8a71'],
  ['#FFA500', '#4169E1', '#a8e68f', '#dc7dc1', '#ffd3b6', '#ffaaa5', '#ff8b94'],
  ['#edc951', '#eb6841', '#cc2a36', '#4f372d', '#00a0b0']
]

export function getColor(series: number, index: number) {
  const s = Palette[series % Palette.length];
  return s[index % s.length]
}