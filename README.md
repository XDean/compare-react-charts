# Compare React Chart Libraries

## Library State _(2021-05-19)_

|           |  Stars | Download | Issues |      Updated |      Created |      Size |
|----------:|-------:|---------:|-------:|-------------:|-------------:|----------:|
| bizcharts |  5,595 |      32K |    248 | Apr 29, 2021 | Nov 10, 2017 |   387.8KB |
|  chart.js | 53,638 |   1,481K |     98 | May 19, 2021 | Mar 18, 2013 |    60.6KB |
|   echarts | 46,444 |     320K |  2,128 | May 19, 2021 |  Apr 3, 2013 |   308.6KB |
|highcharts | 10,061 |     614K |    831 | May 4, 2021	| Mar 12, 2014 |    93.4KB |
|      nivo |  8,746 |       4K |    142 | May 19, 2021	| Apr 16, 2016 |    98.9KB |
| plotly.js | 13,208 |     105K |  1,091 | May 19, 2021	|  Nov 6, 2015 | 1,032.1KB |
| react-vis |  7,830 |      64K |    321 | May 11, 2021 | Feb 23, 2016 |    79.2KB |
|  recharts | 16,338 |     629K |    168 | Apr 20, 2021 |  Aug 7, 2015 |   124.3KB |
|   victory |  8,867 |     143K |    153 | May 19, 2021 |  Jul 3, 2015 |   130.5KB |


## Technical Info

|            |        Graphics       |    Typescript    |  React Component  | Responsive |      Zoom/Brush     |  3D |
|:----------:|:---------------------:|:----------------:|:-----------------:|:----------:|:-------------------:|:---:|
|  bizcharts |    svg, canvas (g2)   |        yes       |        yes        |     no     |        slider       |  no |
|  chart.js  |         canvas        |  @types/chart.js |  react-chartjs-2  |     yes    | chartjs-plugin-zoom |  no |
|   echarts  | svg, canvas (zrender) |        yes       | echarts-for-react |     yes    |         yes         | yes |
| highcharts |          svg          |        yes       |  highcharts-react |     yes    |         yes         | yes |
|    nivo    | svg, canvas, ssr (d3) |        yes       |        yes        |     yes    |          no         |  no |
|  plotly.js |    svg, canvas (d3)   | @types/plotly.js |  react-plotly.js  |     yes    |         yes         | yes |
|  react-vis |    svg, canvas (d3)   | @types/react-vis |        yes        |     yes    |     not complete    |  no |
|  recharts  |        svg (d3)       |        yes       |        yes        |     yes    |          no         |  no |
|   victory  |        svg (d3)       |  @types/victory  |        yes        |     yes    |         yes         |  no |