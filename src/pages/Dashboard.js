import React, { useState, useEffect } from 'react';
import DashboardBox from './components/DashboardBox';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaDailymotion } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import DashboardBoxRight from './components/DashboardBoxRight';
import { PiHandDepositFill } from "react-icons/pi";
import { FaMoneyBillWave } from "react-icons/fa";
import DashboardChart from './components/DashboardChart';
import ForecastTable from './components/ForecastTable';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {
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
        
        <div className='row dashboardBoxWrapperRow'>
          {/* Display daily DashboardBoxes */}
          <div className='col-md-9'>
            <div className='dashboardBoxWrapper d-flex'>
              <DashboardBox color={['#1da256','#48d483']} icon={<FaCircleUser />} title={'Daily New Users'} count={277} details={'More Details'} />
              <DashboardBox color={['#c012e2','#eb64fe']} icon={<IoMdCart />} title={'Daily Order'} count={1006} details={'More Details'} />
              <DashboardBox color={['#2c78e5','#60aff5']} icon={<FaFileInvoiceDollar />} title={'Daily Invoices'} count={15} details={'More Details'} />
              <DashboardBox color={['#e1950e','#f3cd29']} icon={<FaDailymotion />} title={'Daily Sales'} count={`3614 LE`} details={'More Details'} />
              <DashboardBox color={['#ff0f0f','#ff7a7a']} icon={<RiRefund2Fill />} title={'Daily Refund '} count={`400 LE`} details={'More Details'} />
              <DashboardBox color={['#0AECF3','#9CEEF0']} icon={<GiExpense />} title={'Daily Expenses'} count={`800 LE`} details={'More Details'} />
            </div>
          </div>
          
          <div className='col-md-3 pl-0'>
            <div className='box'>
              <DashboardBoxRight color={['#FF7A7A','#F09C9C']} icon={<PiHandDepositFill />} title={'Daily Deposits'} count={`1000 LE`} details={'More Details'} />
              <DashboardBoxRight color={['#0015FF','#3A97F4']} icon={<FaMoneyBillWave />} title={'Daily Total'} count={`2214 LE`} details={'More Details'} />
            </div>
          </div>
        </div>

        {/* Monthly DashboardBoxes */}
        <div className='month'>
          <h3>{new Date().toLocaleString('default', { month: 'long' })}</h3>
          <p>{new Date().toLocaleString('default', { year: 'numeric' })}</p>
        </div>

        <div className='row dashboardBoxWrapperRow pt-5'>
          <div className='col-md-9'>
            <div className='dashboardBoxWrapper d-flex'>
              <DashboardBox color={['#1da256','#48d483']} icon={<FaCircleUser />} title={'Monthly New Users'} count={306} details={'More Details'} />
              <DashboardBox color={['#c012e2','#eb64fe']} icon={<IoMdCart />} title={'Monthly Order'} count={3560} details={'More Details'} />
              <DashboardBox color={['#2c78e5','#60aff5']} icon={<FaFileInvoiceDollar />} title={'Monthly Invoices'} count={5000} details={'More Details'} />
              <DashboardBox color={['#e1950e','#f3cd29']} icon={<FaDailymotion />} title={'Monthly Sales'} count={`850412 LE`} details={'More Details'} />
              <DashboardBox color={['#ff0f0f','#ff7a7a']} icon={<RiRefund2Fill />} title={'Monthly Refund '} count={`3600 LE`} details={'More Details'} />
              <DashboardBox color={['#0AECF3','#9CEEF0']} icon={<GiExpense />} title={'Monthly Expenses'} count={`300000 LE`} details={'More Details'} />
            </div>
          </div>
          
          <div className='col-md-3 pl-0'>
            <div className='box'>
              <DashboardBoxRight color={['#FF7A7A','#F09C9C']} icon={<PiHandDepositFill />} title={'Monthly Deposits'} count={`180000 LE`} details={'More Details'} />
              <DashboardBoxRight color={['#0015FF','#3A97F4']} icon={<FaMoneyBillWave />} title={'Monthly Total'} count={`590000 LE`} details={'More Details'} />
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Dashboard;
