import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const data = {
  labels: ['C++', 'PHP', 'Java',"HTML","CSS","JS"],
  datasets: [
    // {
    //   label: 'maths',
    //   data: [49, 34,90,89,50],
    //   backgroundColor: 'rgba(255,99,132,0.5)',
    // },
    // {
    //   label: 'english',
    //   data: [89, 78],
    //   backgroundColor: 'rgba(54, 162, 235, 0.5)',
    // },
    {
      label: 'SKILLS',
      data: [99, 88,56,78,97,45,67],
      backgroundColor: "blue",
     borderRadius:"5px"
    }
  ],
};

function Barchart() {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Bar options={options} data={data} width={200} height={200} />
    </div>
  );
}

export default Barchart;