import { ChartOptions, ChartDataSets } from 'chart.js';

type ChartConfigType = {
  datasets: ChartDataSets;
  options: ChartOptions;
};
const config: ChartConfigType = {
  datasets: {
    borderColor: '#dff6f599',
    backgroundColor: '#dff6f533',
    borderCapStyle: 'round',
    borderJoinStyle: 'round',
    lineTension: 0.4,
    xAxisID: 'x-0',
    yAxisID: 'y-0',
    pointRadius: 0,
    pointHoverRadius: 0,
    fill: true,
    showLine: true
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          id: 'y-0',
          display: false,
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          id: 'x-0',
          display: false,
          gridLines: {
            display: false
          }
        }
      ]
    },
    responsive: true
  }
};

export default config;