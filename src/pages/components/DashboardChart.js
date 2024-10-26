import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardChart = ({ dailyData, monthlyData, chartType = 'bar' }) => {
  const data = {
    labels: ['New Users', 'Orders', 'Invoices', 'Sales', 'Refunds', 'Expenses', 'Deposits', 'Total'],
    datasets: [
      {
        label: 'Daily Data',
        data: dailyData,
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderWidth: 1,
      },
      {
        label: 'Monthly Data',
        data: monthlyData,
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily vs Monthly Data',
      },
    },
    maintainAspectRatio: false,
    backgroundColor: 'white', // خلفية الرسم البياني بيضاء
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      {chartType === 'bar' ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default DashboardChart;
