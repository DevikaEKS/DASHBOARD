import React, { useRef } from 'react'
import { Chart as ChartJS,ArcElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,Tooltip,Legend
)
const data = {
    labels: ['KGCAS', 'KITE', 'OTHERS'],
    datasets: [
      {
        data: [400, 300, 300],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],
      },
    ],
  };
function Kgcas() {
   const chartRef=useRef(null)
   const chartInstance=useRef(null)
   return(
    <>
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data}width={200} height={200} />
    </div>
    </>
   )
}

export default Kgcas


