import React from 'react'
import DashboardBox from './components/DashboardBox'
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaDailymotion } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import DashboardBoxRight from './components/DashboardBoxRight';
import { PiHandDepositFill } from "react-icons/pi";
import { FaMoneyBillWave } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>

        <div className='right-content w-100'>

          <div className='date'>
            <h3>{new Date().toDateString()}</h3>
            <p>{new Date().toTimeString()}</p>
          </div>

          
            <div className='row dashboardBoxWrapperRow'>
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


          {/* Monthly */}


          <div className='month pt-5'>
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
    </>
  )
}

export default Dashboard