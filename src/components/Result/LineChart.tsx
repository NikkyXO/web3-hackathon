import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill?: boolean;
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

interface LineChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: 'top' | 'bottom' | 'left' | 'right';
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

const LineChart: React.FC = () => {
  const data: LineChartData = {
    labels: ['APC', 'PDP', 'LP', 'ANPP', 'SDP'],
    datasets: [
      {
        label: '',
        data: [6559808, 1565540, 2562729, 2909383, 6473999],
        fill: false,
        backgroundColor: '#741CAC',
        borderColor: '#741CAC',
      },
    ],
  };

  const options: LineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Total number of votes',
      },
    },
  };

  return <Line data={data} options={options} height={50} width={100} />;
};

export default LineChart;






// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const LineChart: React.FC = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: 'background: linear-gradient(180deg, #741CAC 6.28%, rgba(239, 222, 250, 0.2) 100%)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Monthly Sales Data',
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default LineChart;
