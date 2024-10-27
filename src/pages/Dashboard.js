import React, { useState, useEffect } from 'react';
import DashboardChart from './components/DashboardChart';
import TopAndLeastSelling from './components/TopAndLeastSelling';
import ForecastTable from './components/ForecastTable';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import DashboardDaily from './components/DashboardDaily';
import DashboardMonthly from './components/DashboardMonthly';
Chart.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {

  const products = [
    { name: "Product  A", sales: 150 },
    { name: "Product  B", sales: 300 },
    { name: "Product  C", sales: 75 },
  ];


  const [time, setTime] = useState(new Date());
  const [chartType, setChartType] = useState('bar');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dailyData = [277, 1006, 15, 3614, 400, 800, 1000, 2214];
  const monthlyData = [306, 3560, 5000, 850412, 3600, 300000, 180000, 590000];

  return (
    <>
      <div className='right-content w-100'>
        <div className='day'>
          <h3>{time.toDateString()}</h3>
          <p>{time.toLocaleTimeString()}</p>
        </div>
        
        {/* Daily DashboardBoxes */}
        <DashboardDaily />

        {/* Monthly DashboardBoxes */}
        <div className='month'>
          <h3>{new Date().toLocaleString('default', { month: 'long' })}</h3>
          <p>{new Date().toLocaleString('default', { year: 'numeric' })}</p>
        </div>

        <DashboardMonthly />
      </div>

      {/* Chart Type Selector */}
      <div className="chart-type-selector">
        <button onClick={() => setChartType('bar')}>Bar Chart</button>
        <button onClick={() => setChartType('line')}>Line Chart</button>
      </div>

      {/* Chart Container */}
      <div className="chart-container">
        <DashboardChart dailyData={dailyData} monthlyData={monthlyData} chartType={chartType} />
      </div>
      
      {/* Forecast Table */}
      <ForecastTable />

      {/* Top and Least Products Table */}
      <TopAndLeastSelling products={products} />
    </>
  );
};

export default Dashboard;
