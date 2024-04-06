import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing chart.js/auto is recommended for tree-shaking



const DonutChart = ({orderCount,pendingorderCount,confirmorderCount,cancelorderCount}) => {
  // Reference to the canvas element
  const chartRef = useRef(null);

  console.log(orderCount,pendingorderCount,confirmorderCount,cancelorderCount);
  

  useEffect(() => {
    // Get the canvas element
    const canvas = chartRef.current;

    const data = {
      labels: ['pending', 'ongoing', 'complete', 'cancel',],
      datasets: [{
        label: 'My First Dataset',
        data: [pendingorderCount,confirmorderCount,orderCount,cancelorderCount,],
        backgroundColor: [
          '#3B82F6',
          '#FBBF24',
          '#10B981',
          '#A78BFA',
          '#F59E0B',
          '#EF4444',
        ],
        hoverOffset: 4
      }]
    };

    const options = {
      plugins: {
        legend: {
          display: false
        }
      },
      aspectRatio: 1,
      cutout: '40%',
      animation: {
        animateRotate: false
      }
    };

    // Create the chart
    const doughnutChart = new Chart(canvas, {
      type: 'doughnut',
      data: data,
      options: options
    });

   
    return () => {
      doughnutChart.destroy();
    };
  }, [orderCount]); 

  return (
    <div className=" bg-white shadow rounded-xl  shadow-slate-400 ">
        <p className="text-xs md:text-sm font-medium  text-center leading-none text-gray-500 uppercase">Orders</p>
        <canvas className='mt-2 p-5' ref={chartRef}></canvas>
   

    </div>

  );
};

export default DonutChart;
